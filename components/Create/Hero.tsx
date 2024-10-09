"use client";

import React from "react";
import { useContext } from "react";
import { CreateContext } from "@/context/CreateProvider";
import dynamic from "next/dynamic";
import { CreateContextType } from "@/context/CreateProvider";
import { Button } from "../ui/button";

const Phone = dynamic(() => import("../Phone"));

const colors = [
    {
        name: "Black",
        color: "bg-black",
    },
    {
        name: "Red",
        color: "bg-red-500",
    },
    {
        name: "Blue",
        color: "bg-blue-500",
    },
];

const Hero: React.FC = () => {
    const { colorName, setColorName, colorType, setColorType } = useContext<CreateContextType>(CreateContext);

    const handleColorClick = (name: string, type: string): void => {
        setColorName(name);
        setColorType(type);
    };

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh] relative">
            <section className="bg-gray-100 h-full flex flex-col gap-12 items-center justify-center px-[13rem] py-8 border-2 border-gray-300 rounded-xl">
                <Button variant={"default"} className="order-2">
                    Upload
                </Button>
                <Phone imgSrc="" className={`w-60 ${colorType} order-1`} />
            </section>
            <section className="flex flex-col overflow-y-auto bg-gray-50 h-full px-16 gap-8 ">
                <h1 className="text-lg font-bold">Customize your case</h1>
                <hr />
                <div className="flex flex-col gap-4">
                    <p>Color: {colorName}</p>
                    <div className="flex flex-row items-center gap-4">
                        {colors.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleColorClick(item.name, item.color)}
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
