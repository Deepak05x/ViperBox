import React from "react";
import dynamic from "next/dynamic";

const Register = dynamic(() => import("@/components/Register"));
const Logo = dynamic(() => import("@/components/Logo"));

const RegisterPage: React.FC = () => {
    return (
        <>
            <section className="py-[2rem] px-12">
                <Logo />
            </section>
            <section className="flex items-center justify-center py-12  sm:px-6 ssm:px-4">
                <Register />
            </section>
        </>
    );
};

export default RegisterPage;
