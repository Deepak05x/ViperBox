import React from "react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/create/Intro"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/create/Hero"));
const Footer = dynamic(() => import("@/components/Footer"));

const Create: React.FC = () => {
    return (
        <main>
            <Navbar />
            <section className="flex flex-col items-center justify-center py-24 gap-24">
                <Intro borderColor={"border-green"} />
                <Hero />
            </section>
            <Footer />
        </main>
    );
};

export default Create;
