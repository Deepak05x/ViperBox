import React from "react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/create/Intro"));
const Navbar = dynamic(() => import("@/components/Navbar"));

const Summary: React.FC = () => {
    return (
        <main className="flex flex-col">
            <Navbar />
            <section className="flex flex-col items-center justify-center">
                <Intro borderColor={"border-green"} />
            </section>
        </main>
    );
};

export default Summary;
