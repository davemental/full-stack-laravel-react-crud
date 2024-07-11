import React from 'react';
import { Header } from '@/Components/Header';
import { Sidebar } from '@/Components/Sidebar';

export default function Authenticated({ user, children }) {

    return (
        <>
            <div className="min-h-screen grid grid-cols-[100px_auto] bg-gray-100">
                <Sidebar/>
                <div>
                    <Header user={user} />
                    <main>{children}</main>
                </div>
            </div>
        </>

    );
}
