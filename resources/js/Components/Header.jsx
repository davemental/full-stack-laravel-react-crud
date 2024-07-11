import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { useNoteContext } from "@/Context/noteContext";

export const Header = ({ user }) => {
    const { search, setSearch } = useNoteContext();

    return (
        <>
            <nav className="bg-white border-b border-gray-100">
                <div className="px-4 flex justify-between items-center h-16">
                    {/* live search */}
                    <div className="relative w-[300px]">
                        <RiSearch2Line className="text-lg absolute top-3 left-3 text-neutral-500" />
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={(ev)=> setSearch(ev.target.value)}
                            placeholder="Search"
                            className="w-full bg-transparent outline-none py-2 px-3 pl-10 border border-neutral-500/10 rounded-md
                        focus:ring-cyan-500 focus:ring-2"
                            autoComplete="off"
                        />
                    </div>

                    {/* user accounts */}
                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <FaRegUserCircle className="text-2xl" />
                                            <span>{user && user.name}</span>

                                            <IoIosArrowDown />
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
