import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
const Steps = dynamic(() => import("../../components/Steps"));

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen w-full">
            <Navbar />
            <div className="py-24">
                <Steps />
            </div>
            <div className="flex flex-col gap-12 py-24 items-center w-full">{children}</div>
            <Footer />
        </div>
    );
};

export default layout;
