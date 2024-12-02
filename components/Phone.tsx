import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
}

const Phone = ({ imgSrc, className, ...props }: PhoneProps) => {
    return (
        <div className={`relative pointer-events-none z-50 overflow-hidden ${className}`} {...props}>
            <Image alt="phone" src="/phone-template-white-edges.png" className="pointer-events-none z-50 select-none" />
            <div className="absolute -z-10 inset-0">
                <Image className="object-cover min-w-full min-h-full" src={imgSrc} alt="" />
            </div>
        </div>
    );
};

export default Phone;
