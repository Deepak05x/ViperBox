"use client";

import React, { useEffect, useState, useContext } from "react";
import { Area } from "react-easy-crop";
import Cropper from "react-easy-crop";
import dynamic from "next/dynamic";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "./ui/button";
import { ConfigureContext } from "@/context/ConfigureProvider";
import { getCroppedImg } from "./CropImages";
import Link from "next/link";

const Phone = dynamic(() => import("./Phone"));

const colors = [
    { name: "Black", color: "bg-black", hex: "#000000" },
    { name: "Red", color: "bg-red-900", hex: "#7F1D1D" },
    { name: "Blue", color: "bg-indigo-900", hex: "#312E81" },
];

const phones = [{ name: "IPhone" }, { name: "Samsung" }, { name: "Realme" }, { name: "Pixel" }];

const materials = [
    {
        name: "Silicone",
        cost: "+ $2.00",
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
        cost: "+ $2.00",
        price: 2,
    },
    {
        name: "Textured",
        cost: "+ $5.00",
        price: 5,
    },
];

const Hero: React.FC = () => {
    const { setCustomizeSuccess, cost, setCost, colorType, colorName, setColorName, setColorType, phoneModel, setPhoneModel, uploadedImages, setUploadedImages, setMaterial, setFinish } =
        useContext(ConfigureContext);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const [drop, setDrop] = useState<boolean>(false);
    const [colorIndex, setColorIndex] = useState<number | null>(null);
    const [materialIndex, setMaterialIndex] = useState<number | null>(null);
    const [materialCost, setMaterialCost] = useState<number>(0);
    const [finishCost, setFinishCost] = useState<number>(0);
    const [finishIndex, setFinishIndex] = useState<number | null>(null);

    const handleColorClick = (name: string, type: string, index: number): void => {
        setColorName(name);
        setColorType(type);
        setColorIndex(index);
    };

    const handleDropDown = (): void => {
        setDrop((prev) => !prev);
    };

    const handleModelSelect = (name: string): void => {
        setPhoneModel(name);
        setDrop(false);
    };

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCrop = async () => {
        try {
            const selectedColor = colors.find((color) => color.color === colorType)?.hex || "#ffffff";
            const croppedImg = await getCroppedImg(uploadedImages, croppedAreaPixels!, selectedColor);
            setCroppedImage(croppedImg);
            setUploadedImages(croppedImg);
        } catch (error) {
            console.error("Failed to crop the image:", error);
        }
    };

    const handleMaterialClick = (name: string, index: number, cost: number) => {
        setMaterial(name);
        setMaterialIndex(index);
        setMaterialCost(cost);
    };

    const handleFinishClick = (name: string, index: number, cost: number) => {
        setFinish(name);
        setFinishIndex(index);
        setFinishCost(cost);
    };

    useEffect(() => {
        setCost(materialCost + finishCost);
    }, [materialCost, finishCost, setCost]);

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh]">
            <section className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center xl:px-[13rem] lg:px-[10rem] py-8 border-2 border-dashed border-gray-300 rounded-xl">
                {!croppedImage ? (
                    <div className="relative w-60 h-60">
                        <Cropper image={uploadedImages} crop={crop} zoom={zoom} aspect={9 / 16} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
                        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                            {/* Zoom control slider */}
                            <input type="range" min={1} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-40" />
                            <Button onClick={handleCrop} className="mt-2">
                                Apply Crop
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Phone imgSrc={croppedImage} className={`w-60 order-1`} />
                )}
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
                                onClick={() => handleColorClick(item.name, item.color, index)}
                                className={`${item.color} ${
                                    colorIndex === index ? "outline-dashed outline-1" : ""
                                } w-[1.5rem] h-[1.5rem] rounded-full cursor-pointer hover:scale-105 transition ease-in-out`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex flex-col gap-4 font-bold w-full">
                    <p>Model</p>
                    <div className="relative">
                        <div onClick={() => handleDropDown()} className="border-2  border-gray-200 rounded-lg text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                            <span className="flex flex-row items-center justify-between w-full">
                                <p>{phoneModel === "" ? "Select The Model" : phoneModel}</p>
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
                                className={`border-2 ${materialIndex === index ? "border-green" : "border-gray-200"} rounded-lg p-4 flex items-center justify-between hover:cursor-pointer`}
                                onClick={() => handleMaterialClick(item.name, index, item.price)}
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
                                className={`border-2 ${finishIndex === index ? "border-green" : "border-gray-200"} rounded-lg p-4 flex items-center justify-between hover:cursor-pointer`}
                                onClick={() => handleFinishClick(item.name, index, item.price)}
                            >
                                {item.name} <span>{item.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex items-center justify-between w-full font-bold">
                    <p>$ {cost}.00</p>
                    <Link href={"/configure/review"}>
                        <Button onClick={() => setCustomizeSuccess(true)}>Continue</Button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Hero;
