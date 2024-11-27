"use client";

import React from "react";
import { useContext, useState } from "react";
import { CreateContext } from "@/context/CreateProvider";
import dynamic from "next/dynamic";
import { ConfigureContext } from "@/context/ConfigureProvider";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import { getCroppedImg } from "./CropImages";
import { Area } from "react-easy-crop";
import Cropper from "react-easy-crop";

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
        name: "IPhone",
    },
    {
        name: "Samsung",
    },
    {
        name: "Realme",
    },
    {
        name: "Pixel",
    },
];

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
    const { colorName, setColorName, colorType, setColorType, phoneModel, setPhoneModel, uploadedImages, setUploadedImages } = useContext(ConfigureContext);

    const handleColorClick = (name: string, type: string): void => {
        setColorName(name);
        setColorType(type);
    };

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeFinish, setActiveFinish] = useState<number | null>(null);
    const [drop, setDrop] = useState<boolean>(false);
    const [previousMaterial, setPreviousMaterial] = useState<number>(0);
    const [previousFinish, setPreviousFinish] = useState<number>(0);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const handleDropDown = (): void => {
        setDrop((prev) => !prev);
    };

    const handleModelSelect = (name: string): void => {
        setPhoneModel(name);
        setDrop(false);
    };

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCrop = async () => {
        try {
            const croppedImage = await getCroppedImg(uploadedImages, croppedAreaPixels);
            setCroppedImage(croppedImage);
            setUploadedImages(croppedImage);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh]">
            <section className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center xl:px-[13rem] lg:px-[10rem] py-8 border-2 border-dashed border-gray-300 rounded-xl">
                {!croppedImage ? (
                    <div className="relative w-60 h-60">
                        <Cropper image={uploadedImages} crop={crop} zoom={zoom} aspect={9 / 16} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
                        <Button onClick={handleCrop} className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            Apply Crop
                        </Button>
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
                            <div key={index} className={`border-2 ${activeIndex === index ? "border-green" : "border-gray-200"} rounded-lg p-4 flex items-center justify-between hover:cursor-pointer`}>
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
                            >
                                {item.name} <span>{item.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px]">&nbsp;</div>
                <div className="flex items-center justify-between w-full font-bold">
                    <p>$ 20.00</p>
                    <Button>Continue</Button>
                </div>
            </section>
        </section>
    );
};

export default Hero;
