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
        color: "bg-red-900",
    },
    {
        name: "Blue",
        color: "bg-indigo-900",
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

const materials = [
    {
        name: "Silicone",
        cost: "+ $1.00",
        price: 2,
    },
    {
        name: "Polycarbonate",
        cost: "+ $5.00",
        price: 5,
    },
];

const finishes = [
    {
        name: "Smooth",
        cost: "+ $1.00",
        price: 1,
    },
    {
        name: "Textured",
        cost: "+ $5.00",
        price: 5,
    },
];

const Hero: React.FC = () => {
    const { colorName, setColorName, colorType, setColorType, phoneModel, setPhoneModel, setMaterial, material } = useContext<CreateContextType>(CreateContext);

    const handleColorClick = (name: string, type: string): void => {
        setColorName(name);
        setColorType(type);
    };

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeFinish, setActiveFinish] = useState<number | null>(null);
    const [drop, setDrop] = useState<boolean>(false);

    const handleDropDown = (): void => {
        setDrop((prev) => !prev);
    };

    const handleModelSelect = (name: string): void => {
        setPhoneModel(name);
        setDrop(false);
    };

    const handleMaterial = (index: number, item: string): void => {
        setActiveIndex(index === activeIndex ? null : index);
        setMaterial(item);
    };

    const handleFinish = (index: number, item: string): void => {
        setActiveFinish(index);
    };

    console.log(material);

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh] relative">
            <section className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center px-[13rem] py-8 border-2 border-dashed border-gray-300 rounded-xl">
                <Button variant={"default"} className="order-2">
                    Upload
                </Button>
                <Phone imgSrc="" className={`w-60 ${colorType} order-1`} />
            </section>
            <section className="flex  flex-col overflow-y-auto items-start  h-full px-12 py-4 gap-8 ">
                <h1 className="text-2xl font-bold">Customize your case</h1>
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className="flex flex-col gap-4 font-bold">
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
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex flex-col gap-4 font-bold w-full">
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
                                    <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleModelSelect(item.name)}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex flex-col gap-4 w-full font-bold">
                    <p>Material</p>
                    <div className="flex flex-col text-sm gap-4">
                        {materials.map((item, index) => (
                            <div
                                key={index}
                                className={`border-2 ${activeIndex === index ? "border-green" : "border-gray-200"} rounded-lg p-4 flex items-center justify-between hover:cursor-pointer`}
                                onClick={() => handleMaterial(index, item.name)}
                            >
                                {item.name} <span>{item.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex flex-col gap-4 w-full font-bold">
                    <p>Finish</p>
                    <div className="flex flex-col text-sm gap-4">
                        {finishes.map((item, index) => (
                            <div
                                key={index}
                                className={`border-2 ${activeFinish === index ? "border-green" : "border-gray-200"} rounded-lg p-4 flex items-center justify-between hover:cursor-pointer`}
                                onClick={() => handleFinish(index, item.name)}
                            >
                                {item.name} <span>{item.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
            </section>
        </section>
    );
};

export default Hero;
