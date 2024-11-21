import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
const Steps = dynamic(() => import("@/components/configure/Steps"));

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar />
            <Steps />
            {children}
            <Footer />
        </div>
    );
};

export default layout;
