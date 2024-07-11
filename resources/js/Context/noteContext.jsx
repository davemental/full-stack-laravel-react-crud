import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

const NoteContext = createContext(null);

export const useNoteContext = () => {
    return useContext(NoteContext);
}

export const NoteProvider = ({ children }) => {
    const [noteData, setNoteData] = useState([]);
    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
       noteData && setNotes(noteData);
    }, [noteData]);

    useMemo(() => {
        const filteredNotes = noteData.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
        setNotes(filteredNotes);
    }, [search]);

    const value = {
        notes,
        setNotes,
        search,
        setSearch,
        setNoteData
    }

    return (
        <NoteContext.Provider value={value}>
            {children}
        </NoteContext.Provider>
    )
}
