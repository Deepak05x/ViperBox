import React from "react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/Create/Intro"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Create/Hero"));

const Create: React.FC = () => {
    return (
        <main>
            <Navbar />
            <section className="flex flex-col items-center justify-center">
                <Intro borderColor={"border-green"} />
                <Hero />
            </section>
        </main>
    );
};

export default Create;
