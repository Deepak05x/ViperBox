import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
}

const Phone = ({ imgSrc, className, ...props }: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <img src="/phone-template-white-edges.png" className="pointer-events-none z-50 select-none" alt="" />
            <div className="absolute -z-10 inset-0">
                <img className="object-cover min-w-full min-h-full" src={imgSrc} alt="" />
            </div>
        </div>
    );
};

export default Phone;
