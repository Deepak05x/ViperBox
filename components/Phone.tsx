import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
}

const Phone = ({ imgSrc, className, ...props }: PhoneProps) => {
    return (
        <div className={`relative pointer-events-none z-50  overflow-hidden ${className}`} {...props}>
            <Image alt="phone" src="/phone-template-white-edges.png" width={500} height={500} className="pointer-events-none z-50 select-none w-60" />
            <div className="absolute -z-10 inset-0">
                <Image src={imgSrc} alt="overlaying phone image" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
};

export default Phone;
