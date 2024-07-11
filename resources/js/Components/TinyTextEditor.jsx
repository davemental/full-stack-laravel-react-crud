import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyTextEditor = ({ setFormValues, initialValue }) => {
    const editorRef = useRef(null);

    const handleEditorChange = (content) => {
        if (content) {
            setFormValues((prevValues) => ({
                ...prevValues,
                description: editorRef.current.getContent(),
            }));
        }
    };

    return (
        <>
            <Editor
                apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                onInit={(_evt, editor) => (editorRef.current = editor)}
                value={initialValue}
                onEditorChange={handleEditorChange}
                init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
        </>
    );
};

export default TinyTextEditor;
