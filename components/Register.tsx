"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (response.ok) {
                router.push("/login");
            }
        } catch (error) {
            throw new Error("Register function is not working");
        }
    };

    return (
        <section className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 md:gap-12 ssm:gap-8  bg-white drop-shadow-2xl shadow-black">
            <h1 className="sm:text-3xl ssm:text-2xl font-medium">
                Don&apos;t have an <span className="text-green">account?</span>
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 w-full">
                <Input id="name" name="name" placeholder="Enter your name" required />
                <Input id="email" name="email" placeholder="Enter your email" required />
                <Input id="password" name="password" type={"password"} placeholder="Enter your password" required />
                <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="text-sm">
                        Show password
                    </label>
                </div>
                <Button variant={"destructive"}>Register</Button>
            </form>

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
