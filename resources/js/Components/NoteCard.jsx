import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import PrimaryIconButton from "./PrimaryIconButton";
import DangerIconButton from "./DangerIconButton";
import { useForm } from '@inertiajs/react';
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Modal from "./Modal";
import EditNoteForm from "./EditNoteForm";

const NoteCard = ({ note }) => {
    const markupDescription = { __html: note && note.description };
    const [openModal, setOpenModal] = useState(false);

    const { delete: destroy } = useForm();

    const handleDeleteNote = (note) => {
        //verify before deleting the note
        Swal.fire({
            html: `<p style='font-size: 18px; font-weight: bold;'>Are you sure you want to delete this note
                    <br/>"${note.title}"</p>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, I am sure!",
            cancelButtonText: "No, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route('notes.destroy', note.id), {
                    onError: () => {
                        toast.error('Failed to delete note', {position: "top-right", autoClose: 3000});
                    }
                })
            }
        });
    }

    return (
        <>
            <div className="group relative p-4 pb-3 rounded-xl bg-cyan-100/70 border border-cyan-300 h-[250px] shadow-sm text-sm">
                <div className="h-full grid grid-rows-[20px_auto_40px] gap-1">
                    <div>
                        <h2 className="text-lg font-bold">{note.title}</h2>
                    </div>

                    {/* note content */}
                    <div
                        dangerouslySetInnerHTML={markupDescription}
                        className="pt-2"
                    />
                    <div className="text-neutral-500 flex justify-between items-center">
                        <div className="text-xs">
                            {new Date(note && note.created_at ? note.created_at : note.updated_at).toLocaleDateString(
                                ["en-Us"],
                                {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </div>
                        <div>
                            <PrimaryIconButton onClick={()=> setOpenModal(true)}>
                                <FaPencilAlt className="m-auto" />
                            </PrimaryIconButton>
                        </div>
                    </div>
                </div>

                <DangerIconButton onClick={()=> handleDeleteNote(note)}>
                    <RiDeleteBin6Line className="m-auto text-xl" />
                </DangerIconButton>
            </div>

            <Modal show={openModal} setOpenModal={setOpenModal}>
                <EditNoteForm setOpenModal={setOpenModal} note={note} />
            </Modal>
        </>
    );
};

export default NoteCard;
