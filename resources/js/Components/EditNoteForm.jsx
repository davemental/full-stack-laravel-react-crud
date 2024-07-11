import React, { lazy, Suspense } from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import Spinner from "./Spinner";
import PrimaryButton from "./PrimaryButton";
import { wait } from "../Hooks/useTimeout";
import { useForm } from "@inertiajs/react";

//load tiny editor with 1sec deleay
const TinyTextEditor = lazy(() =>
    wait(1000).then(() => import("./TinyTextEditor"))
);

const EditNoteForm = ({ setOpenModal, note }) => {
    const { data, setData, patch, processing, errors } = useForm({
        title: note.title,
        description: note.description,
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();

        patch(route('notes.update', note), {
            preserveScroll: true,
            onSuccess: () => {
                setOpenModal(false);
            },
        });
    }

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <InputLabel htmlFor="title" value="Note Title" />
                        <TextInput
                            name="title"
                            placeholder="Title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            isFocused={true}
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <Suspense fallback={<Spinner loading={true} />}>
                        <div>
                            <InputLabel
                                htmlFor="description"
                                value="Note Description"
                            />
                            <TinyTextEditor
                                setFormValues={setData}
                                initialValue={data.description}
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                    </Suspense>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                    <PrimaryButton type="submit" className="ms-4" disabled={processing}>
                        Save
                    </PrimaryButton>

                    <PrimaryButton type="button" onClick={() => setOpenModal(false)}>
                        Close
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default EditNoteForm;
