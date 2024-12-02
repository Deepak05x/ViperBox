import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));

const DesignPage = () => {
    return (
        <div>
            <Hero />
        </div>
    );
};

export default DesignPage;
