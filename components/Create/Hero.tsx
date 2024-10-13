"use client";

import React from "react";
import { useContext, useState } from "react";
import { CreateContext } from "@/context/CreateProvider";
import dynamic from "next/dynamic";
import { CreateContextType } from "@/context/CreateProvider";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";

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

const phones = [
    {
        name: "IPhone 15",
    },
    {
        name: "IPhone 14",
    },
    {
        name: "IPhone 13",
    },
    {
        name: "IPhone 12",
    },
];

const Hero: React.FC = () => {
    const { colorName, setColorName, colorType, setColorType, phoneModel, setPhoneModel } = useContext<CreateContextType>(CreateContext);

    const handleColorClick = (name: string, type: string): void => {
        setColorName(name);
        setColorType(type);
    };

    const [drop, setDrop] = useState<boolean>(false);

    const handleDropDown = (): void => {
        setDrop((prev) => !prev);
    };

    const handleModelSelect = (name: string): void => {
        setPhoneModel(name);
        setDrop(false);
    };

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh] relative">
            <section className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center px-[13rem] py-8 border-2 border-dashed border-gray-300 rounded-xl">
                <Button variant={"default"} className="order-2">
                    Upload
                </Button>
                <Phone imgSrc="" className={`w-60 ${colorType} order-1`} />
            </section>
            <section className="flex  flex-col overflow-y-auto items-start  h-full px-16 py-4 gap-8 ">
                <h1 className="text-2xl font-bold">Customize your case</h1>
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className="flex flex-col gap-4 font-medium">
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
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className="flex flex-col gap-4 font-medium w-full">
                    <p>Model</p>
                    <div className="relative">
                        <div onClick={() => handleDropDown()} className="border-2  border-gray-200 rounded-lg text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                            {phoneModel}
                            <span>
                                <IoMdArrowDropdown />
                            </span>
                        </div>
                        {drop && (
                            <div className="absolute left-0 right-0 bg-white border-2 border-gray-200 mt-1 z-30 text-sm">
                                {phones.map((item, index) => (
                                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleModelSelect(item.name)}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className="flex flex-col gap-4">
                    <p>Material</p>
                    <div></div>
                </div>
            </section>
        </section>
    );
};

export default Hero;
