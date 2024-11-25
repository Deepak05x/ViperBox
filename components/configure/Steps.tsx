"use client";

import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import { ConfigureContext } from "@/context/ConfigureProvider";
import { useContext } from "react";

const Steps = () => {
    const { uploadSuccess, customizeSuccess, reviewSuccess } = useContext(ConfigureContext);

    const steps = [
        {
            title: "Upload Image",
            desc: "Upload Your Custom Images",
            url: "/upload",
            icon: <FaCloudUploadAlt />,
            arrow: <ArrowRight />,
            key: uploadSuccess,
        },
        {
            title: "Customize",
            desc: "Customize Your Phone Case",
            url: "/design",
            icon: <MdDashboardCustomize />,
            arrow: <ArrowRight />,
            key: customizeSuccess,
        },
        {
            title: "Review",
            desc: "Review Your Customization",
            url: "/review",
            icon: <MdOutlineRateReview />,
            key: reviewSuccess,
        },
    ];

    return (
        <section className="flex flex-row items-center w-full justify-center gap-12">
            {steps.map((item, index) => (
                <div key={index} className="flex flex-row items-center">
                    <div className="ring ring-black flex flex-row gap-4 items-center px-4 py-2">
                        <p className="text-xl">{item.icon}</p>

                        <div className={`flex flex-col ${item.key ? "text-green" : "text-black"}`}>
                            <p>{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    <p>{item.arrow}</p>
                </div>
            ))}
        </section>
    );
};

export default Steps;
