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
import { motion } from "framer-motion";

const Logo = dynamic(() => import("@/components/Logo"));

const Navbar: React.FC = () => {
    const { session, handleLogout } = useContext(SessionContext);

    const [menu, setMenu] = useState<boolean>(false);

    const handleToggle = (): void => {
        setMenu((prev) => !prev);
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex w-full items-center justify-between py-6 px-12 bg-white drop-shadow-xl"
        >
            <Logo />

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="md:flex items-center gap-8 text-lg font-medium hidden"
            >
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
                        <Link href={"/create"}>
                            <Button className="flex items-center gap-1 justify-center">
                                <p>Create Case</p>
                                <FaArrowRight className="text-sm" />
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Button>
                        <Link href={"/login"} className="cursor-pointer ">
                            Login
                        </Link>
                    </Button>
                )}
            </motion.section>

            <section className="flex md:hidden">
                {menu ? (
                    <>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                            <IoMdClose className="text-3xl relative" onClick={() => handleToggle()} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            key="menuContent"
                            viewport={{ once: true }}
                            className="absolute bg-black backdrop-blur-xl flex flex-col gap-12 px-12 py-8 top-32 rounded-md right-10 items-center justify-center"
                        >
                            <Button variant={"destructive"}>
                                <Link href={"/login"} className="cursor-pointer ">
                                    Login
                                </Link>
                            </Button>
                            <p className="cursor-pointer text-lg font-medium text-white flex items-center gap-1">
                                Dashboard
                                <PiShootingStarFill className="text-yellow-500" />
                            </p>
                            <Link href={"/create"}>
                                <Button className="flex items-center gap-1 justify-center">
                                    <p>Create Case</p>
                                    <FaArrowRight className="text-sm" />
                                </Button>
                            </Link>
                        </motion.div>
                    </>
                ) : (
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                        <IoMdMenu className="text-3xl" onClick={() => handleToggle()} />
                    </motion.div>
                )}
            </section>
        </motion.nav>
    );
};

export default Navbar;
