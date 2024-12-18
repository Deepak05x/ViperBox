"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ConfigureContext } from "@/context/ConfigureProvider";
import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Steps = () => {
    const { uploadSuccess, customizeSuccess, reviewSuccess } = useContext(ConfigureContext);

    const steps = [
        {
            title: "Upload Image",
            desc: "Upload Your Custom Images",
            url: "/upload",
            icon: "/upload.svg",
            arrow: <ArrowRight />,
            key: uploadSuccess,
        },
        {
            title: "Customize",
            desc: "Customize Your Phone Case",
            url: "/design",
            icon: "/customize.svg",
            arrow: <ArrowRight />,
            key: customizeSuccess,
        },
        {
            title: "Review",
            desc: "Review Your Customization",
            url: "/review",
            icon: "/view2.svg",
            key: reviewSuccess,
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex lg:flex-row flex-col px-8 items-center w-full justify-center gap-8"
        >
            {steps.map((item, index) => (
                <div className="flex lg:flex-row flex-col items-center justify-center gap-8" key={index}>
                    <div className={`flex flex-row items-center  ${item.key ? "border-green border-b-[3px]" : "border-gray-300"} border-[1px] gap-1 px-8 py-4 text-sm`}>
                        <div className="flex flex-row gap-4 items-center px-4 py-2">
                            <Image alt="icon" src={item.icon} width={50} height={50} className="w-[2rem] h-[2rem] " />

                            <div className="flex flex-col gap-1">
                                <p>{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                    <p className="lg:rotate-0 rotate-90">{item.arrow}</p>
                </div>
            ))}
        </motion.section>
    );
};

export default Steps;
