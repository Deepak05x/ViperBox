import React from "react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Logo = dynamic(() => import("@/components/Logo"));

const Login = () => {
    return (
        <>
            <section className="px-12 py-4">
                <Logo />
            </section>
            <section className="flex items-center justify-center py-12 px-12">
                <div className="flex flex-col rounded-3xl items-center md:px-16 sm:px-8 py-16 gap-12 bg-white drop-shadow-2xl shadow-black">
                    <div className="flex flex-col items-center gap-12">
                        <h1 className="text-4xl  font-medium">
                            Already have an <span className="text-green">account?</span>
                        </h1>
                        <form action="" className="flex flex-col gap-8 w-full">
                            <Input id="email" placeholder="Enter your email" />
                            <Input id="password" type={"password"} placeholder="Enter your password" />
                        </form>
                        <div>
                            <p className="text-lg flex gap-2 items-center">
                                Don't have an account?{" "}
                                <Link href={"/signin"}>
                                    <Button>Sign up</Button>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <p className="bg-black rounded-full px-4 py-2 text-white">Or</p>
                    <div>
                        <form className="flex flex-col items-center gap-8">
                            <div className="flex items-center gap-4">
                                <FaGithub className="text-2xl" />
                                <Button>Sign In with Github</Button>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaGoogle className=" text-2xl" />
                                <Button>Sign In with Google</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
