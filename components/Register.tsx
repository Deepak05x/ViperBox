"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

    const handleSubmission = () => {
        const form = document.getElementById("register") as HTMLFormElement | null;
        if (form) {
            form.submit();
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 md:gap-12 ssm:gap-8  bg-white drop-shadow-2xl shadow-black"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-3xl ssm:text-2xl font-medium"
            >
                Don&apos;t have an <span className="text-green">account?</span>
            </motion.h1>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                id="register"
                className="flex flex-col items-center gap-8 w-full"
            >
                <Input id="name" name="name" placeholder="Enter your name" required />
                <Input id="email" name="email" placeholder="Enter your email" required />
                <Input id="password" name="password" type={"password"} placeholder="Enter your password" required />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}>
                    <Button variant={"destructive"} className="mt-4">
                        Register
                    </Button>
                </motion.div>
            </motion.form>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                <p className="text-lg flex md:flex-row flex-col gap-4 items-center">
                    Have an account?
                    <Link href={"/login"}>
                        <Button>Login</Button>
                    </Link>
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Register;
