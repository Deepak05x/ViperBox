"use client";

import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { CreateContext } from "@/context/CreateProvider";

const colors = [
    {
        name: "Black",
        color: "bg-black",
    },
    {
        name: "Red",
        color: "bg-red-500",
    },
];

const Hero = () => {
    const { color, setColor } = useContext(CreateContext);

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[70vh]">
            <section className="bg-gray-100 h-full flex items-center justify-center px-[13rem] py-24">
                <Image src={"/phone-template.png"} alt="phone" width={200} height={200} />
            </section>
            <section className="flex flex-col overflow-y-auto h-full px-24 gap-8 ">
                <h1 className="text-lg font-medium">Customize your case</h1>
                <hr />
                <div className="flex flex-col gap-4">
                    <p>Color: {color}</p>
                    <div className="flex flex-row items-center gap-4">
                        {colors.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setColor(item.name)}
                                className={`${item.color} w-[1.5rem] h-[1.5rem] rounded-full cursor-pointer hover:scale-105 transition ease-in-out`}
                            ></div>
                        ))}
                    </div>
                </div>
                <hr />
            </section>
        </section>
    );
};

export default Hero;
