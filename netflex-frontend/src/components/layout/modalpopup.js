"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import { MdClose } from "react-icons/md";

export default function ModalDialog({ children, isOpen, setIsOpen, params = { heading: undefined, isclose: true, ispadding: false } }) {

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>


            <Dialog
                as="div"
                className="relative z-50"
                onClose={closeModal}
                open={isOpen}
            >
                <div className="fixed inset-0 bg-black/75" />

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                            {params.heading && <Dialog.Title
                                as="div"
                                className={`text-lg font-medium leading-6 text-gray-900 flex w-full items-center ${params.isclose ? 'justify-between' : 'justify-center'} `}
                            >
                                <h3>THis is a Title</h3>
                                {params.isclose && <IconButton onClick={closeModal}>
                                    <Close />
                                </IconButton>}
                            </Dialog.Title>}
                            <Dialog.Description>
                                {children}
                            </Dialog.Description>

                            <div className="mt-4 close-btn-container">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                >
                                    <MdClose />
                                </button>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
