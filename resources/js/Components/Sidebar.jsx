import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import Modal from './Modal';
import CreateNoteForm from './CreateNoteForm';
import { Link } from '@inertiajs/react';

export const Sidebar = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    }

  return (
    <>
    <div className="bg-white border border-neutral-200 border-r-[1px] text-center">
        <div className="mt-10">
            <Link href={route('dashboard')}>
                <p className="text-xl font-semibold">Notes</p>
            </Link>
        </div>

        <div className="mt-12">
            <button
                onClick={()=> setOpenModal(true)}
                className='w-12 h-12 mx-auto rounded-full bg-cyan-700 border border-cyan-800 text-white transform ease-in-out duration-300 hover:scale-110'
            >
                <MdAdd className='m-auto text-4xl' />
            </button>
        </div>
        </div>

          <Modal show={openModal} onClose={closeModal} closeable={false}>
              <CreateNoteForm setOpenModal={setOpenModal} />
        </Modal>
  </>
  )
}
