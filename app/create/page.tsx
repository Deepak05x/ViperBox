import React from "react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/Create/Intro"));
const Navbar = dynamic(() => import("@/components/Navbar"));

const page: React.FC = () => {
    return (
        <main>
            <Navbar />
            <section>
                <Intro borderColor={"border-green"} />
            </section>
        </main>
    );
};

export default page;
