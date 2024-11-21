import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

const steps = [
    {
        title: "Upload Image",
        desc: "Upload Your Custom Images",
        url: "/upload",
        icon: <FaCloudUploadAlt />,
    },
    {
        title: "Customize",
        desc: "Customize Your Phone Case",
        url: "/design",
        icon: <MdDashboardCustomize />,
    },
    {
        title: "Review",
        desc: "Review Your Customization",
        url: "/review",
        icon: <MdOutlineRateReview />,
    },
];

const Steps = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center gap-12">
            {steps.map((item, index) => (
                <div key={index} className="ring ring-black flex flex-row gap-4 items-center px-4 py-2">
                    <p className="text-xl">{item.icon}</p>

                    <div className="flex flex-col ">
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Steps;
