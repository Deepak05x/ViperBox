"use client";

import React, { FormEvent } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { doLogin } from "@/app/action";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);

            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                router.push("/");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error: unknown) {
            console.log("Login Function is not working");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 gap-12 bg-white drop-shadow-2xl shadow-black"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-3xl ssm:text-2xl font-medium"
            >
                Already have an <span className="text-green">account?</span>
            </motion.h1>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="flex items-center flex-col gap-8 w-full"
            >
                <Input id="email" name="email" placeholder="Enter your email" required />
                <Input id="password" name="password" type={"password"} placeholder="Enter your password" required />
                <Button variant={"destructive"} className="mt-4" type="submit">
                    Log in
                </Button>
            </motion.form>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex gap-4 items-center"
                action={doLogin}
            >
                <Button variant={"none"} name="action" value={"google"} type="submit">
                    <Image src={"/google.svg"} alt="google" width={35} height={35} className="hover:translate-y-[-0.3rem] transition-all ease-in-out" />
                </Button>
                <Button variant={"none"} name="action" value={"github"} type="submit">
                    <Image src={"/github.svg"} alt="google" width={35} height={35} className="hover:translate-y-[-0.3rem] transition-all ease-in-out" />
                </Button>
                <Button variant={"none"} name="action" value={"twitter"} type="submit">
                    <Image src={"/twitter.svg"} alt="google" width={35} height={35} className="hover:translate-y-[-0.3rem] transition-all ease-in-out" />
                </Button>
            </motion.form>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                <p className="text-lg flex md:flex-row flex-col gap-4 items-center">
                    Don't have an account?{" "}
                    <Link href={"/register"}>
                        <Button>Sign up</Button>
                    </Link>
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Login;
