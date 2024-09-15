import React from "react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Logo = dynamic(() => import("@/components/Logo"));

const Login: React.FC = () => {
    return (
        <div>
            <section className="py-[2rem] px-12">
                <Logo />
            </section>
            <section className="flex flex-col  gap-12 items-center justify-center py-12  px-12">
                <div className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 gap-12 bg-white drop-shadow-2xl shadow-black">
                    <h1 className="sm:text-3xl ssm:text-2xl font-medium">
                        Already have an <span className="text-green">account?</span>
                    </h1>
                    <form action="" className="flex flex-col gap-8 w-full">
                        <Input id="email" placeholder="Enter your email" />
                        <Input id="password" type={"password"} placeholder="Enter your password" />
                    </form>
                    <Button variant={"destructive"}>Log in</Button>
                    <form className="flex  items-center ">
                        <Button variant={"none"}>
                            <Image src={"/google.svg"} alt="google" width={35} height={35} />
                        </Button>
                        <Button variant={"none"}>
                            <Image src={"/github.svg"} alt="google" width={35} height={35} />
                        </Button>
                        <Button variant={"none"}>
                            <Image src={"/twitter.svg"} alt="google" width={35} height={35} />
                        </Button>
                    </form>
                    <div>
                        <p className="text-lg flex md:flex-row flex-col gap-4 items-center">
                            Don't have an account?{" "}
                            <Link href={"/register"}>
                                <Button>Sign up</Button>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
