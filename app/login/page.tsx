import React from "react";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/components/Login"));
const Logo = dynamic(() => import("@/components/Logo"));

const LoginPage: React.FC = () => {
    return (
        <>
            <section className="py-6 px-12">
                <Logo />
            </section>
            <section className="flex items-center justify-center py-12  sm:px-6 ssm:px-4">
                <Login />
            </section>
        </>
    );
};

export default LoginPage;
