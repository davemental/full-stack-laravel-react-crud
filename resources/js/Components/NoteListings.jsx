import React from "react";
import NoteCard from "./NoteCard";
import { useNoteContext } from "../Context/noteContext";

function NoteListings() {
     const { notes } = useNoteContext();

    return (
        <div className="h-fit p-5 grid grid-cols-5 gap-5">
            {notes.length > 0 ? (
                notes.map((note, key) => <NoteCard key={key} note={note} />)
            ) : (
                <div>Note notes added!</div>
            )}
        </div>
    );
}

export default NoteListings;
