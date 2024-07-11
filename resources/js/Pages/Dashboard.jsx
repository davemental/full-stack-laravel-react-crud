import React from 'react';
import NoteListings from '@/Components/NoteListings';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {  useNoteContext } from '@/Context/noteContext';

export default function Dashboard({ noteData, auth }) {
    const { flash } = usePage().props;
    const { setNoteData } = useNoteContext();

    // set notes
    useEffect(() => {
       noteData && setNoteData(noteData);
    }, [noteData])

    useEffect(() => {
        flash.message && toast.success(flash.message, { position: "top-right", autoClose: 3000 });
        flash.error && toast.error(flash.error, { position: "top-right", autoClose: 3000 });
    }, [flash])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <NoteListings  />
        </AuthenticatedLayout>
    );
}
