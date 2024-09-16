"use client";

import React, { useState, useContext } from "react";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Button } from "./ui/button";
import { SessionContext } from "@/context/SessionProvider";
import Image from "next/image";

const Logo = dynamic(() => import("@/components/Logo"));

const Navbar: React.FC = () => {
    const { session, handleLogout } = useContext(SessionContext);

    const [menu, setMenu] = useState<boolean>(false);

    const handleToggle = (): void => {
        setMenu((prev) => !prev);
    };

    console.log(session)

    return (
        <nav className="flex fixed  z-30 w-full items-center justify-between py-6 px-12 bg-white drop-shadow-xl">
            <Logo />
            <section className="md:flex items-center gap-8 text-lg font-medium hidden">
                {session ? (
                    <>
                        <Image src={session?.image || "/google.svg"} alt="profile" className="rounded-full" width={40} height={40} />
                        <Button onClick={handleLogout} variant={"destructive"}>
                            Sign out
                        </Button>
                        <p className="cursor-pointer flex items-center gap-1">
                            Dashboard
                            <PiShootingStarFill className="text-yellow-500" />
                        </p>
                        <Button className="flex items-center gap-1 justify-center">
                            <p>Create Case</p>
                            <FaArrowRight className="text-sm" />
                        </Button>
                    </>
                ) : (
                    <Button>
                        <Link href={"/login"} className="cursor-pointer ">
                            Login
                        </Link>
                    </Button>
                )}
            </section>
            <section className="flex md:hidden">
                {menu ? (
                    <>
                        <IoMdClose className="text-3xl relative" onClick={() => handleToggle()} />
                        <div className="absolute bg-black/20 flex flex-col gap-12 px-12 py-8 top-20 right-10 items-center justify-center">
                            <Button variant={"destructive"}>
                                <Link href={"/login"} className="cursor-pointer ">
                                    Login
                                </Link>
                            </Button>
                            <p className="cursor-pointer text-lg font-medium flex items-center gap-1">
                                Dashboard
                                <PiShootingStarFill className="text-yellow-500" />
                            </p>
                            <Button className="flex items-center gap-1 justify-center">
                                <p>Create Case</p>
                                <FaArrowRight className="text-sm" />
                            </Button>
                        </div>
                    </>
                ) : (
                    <IoMdMenu className="text-3xl" onClick={() => handleToggle()} />
                )}
            </section>
        </nav>
    );
};

export default Navbar;
