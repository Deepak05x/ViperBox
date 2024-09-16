import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { doLogin } from "@/app/action";

const Login: React.FC = () => {
    return (
        <section className="flex flex-col rounded-3xl items-center md:px-16 sm:px-12 ssm:px-8 py-16 gap-12 bg-white drop-shadow-2xl shadow-black">
            <h1 className="sm:text-3xl ssm:text-2xl font-medium">
                Already have an <span className="text-green">account?</span>
            </h1>
            <form action="" className="flex flex-col gap-8 w-full">
                <Input id="email" placeholder="Enter your email" />
                <Input id="password" type={"password"} placeholder="Enter your password" />
            </form>
            <Button variant={"destructive"}>Log in</Button>
            <form className="flex  items-center" action={doLogin}>
                <Button variant={"none"} name="action" value={"google"} type="submit">
                    <Image src={"/google.svg"} alt="google" width={35} height={35} />
                </Button>
                <Button variant={"none"} name="action" value={"github"} type="submit">
                    <Image src={"/github.svg"} alt="google" width={35} height={35} />
                </Button>
                <Button variant={"none"} name="action" value={"twitter"} type="submit">
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
        </section>
    );
};

export default Login;
