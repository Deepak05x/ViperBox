"use client";

import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
interface Props {
    borderColor: string;
}

const Intro = ({ borderColor }: Props) => {
    const pathname = usePathname();

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:text-start text-center items-center justify-center gap-4  sm:px-12 ssm:px-8">
                <div className={`border-[1px] flex flex-col gap-1 ${pathname === "/create" ? borderColor : "border-gray-300"} px-12 py-4 text-sm`}>
                    <p className="text-green">Step 1: Add Image</p>
                    <p>Choose an image for your case</p>
                </div>
                <FaArrowRight className="text-xl font-medium lg:rotate-0 rotate-90" />
                <div className={`border-[1px] flex flex-col gap-1 ${pathname === "/customize" ? borderColor : "border-gray-300"} px-12 py-4 text-sm`}>
                    <p className="text-green">Step 2: Customize design</p>
                    <p>Make the case yours</p>
                </div>
                <FaArrowRight className="text-xl font-medium lg:rotate-0 rotate-90" />
                <div className={`border-[1px] flex flex-col gap-1 ${pathname === "/summary" ? borderColor : "border-gray-300"} px-12 py-4 text-sm`}>
                    <p className="text-green">Step 3: Summary</p>
                    <p>Review your final design</p>
                </div>
            </div>
        </>
    );
};

export default Intro;
