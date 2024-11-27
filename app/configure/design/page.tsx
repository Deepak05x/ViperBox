import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/configure/Hero"));

const design = () => {
    return (
        <div>
            <Hero />
        </div>
    );
};

export default design;
