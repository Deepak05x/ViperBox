import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";

const Register: React.FC = () => {
    return (
        <section className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 md:gap-12 ssm:gap-8  bg-white drop-shadow-2xl shadow-black">
            <h1 className="sm:text-3xl ssm:text-2xl font-medium">
                Don&apos;t have an <span className="text-green">account?</span>
            </h1>
            <form action="" className="flex flex-col gap-8 w-full">
                <Input id="email" placeholder="Enter your email" />
                <Input id="password" type={"password"} placeholder="Enter your password" />
                <Input id="confirm" type={"password"} placeholder="Re-enter your password" />
                <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="text-sm">
                        Show password
                    </label>
                </div>
            </form>
            <Button variant={"destructive"}>Register</Button>
            <div>
                <p className="text-lg flex md:flex-row flex-col gap-4 items-center">
                    Have an account?
                    <Link href={"/login"}>
                        <Button>Login</Button>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
