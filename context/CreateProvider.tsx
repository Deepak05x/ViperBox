"use client";

import React, { ReactNode } from "react";
import { useState, createContext } from "react";

export interface CreateContextType {
    colorName: string;
    colorType: string;
    phoneModel: string;
    material: string;
    setColorName: React.Dispatch<React.SetStateAction<string>>;
    setColorType: React.Dispatch<React.SetStateAction<string>>;
    setPhoneModel: React.Dispatch<React.SetStateAction<string>>;
    setMaterial: React.Dispatch<React.SetStateAction<string>>;
}

const CreateContextIntital: CreateContextType = {
    colorName: "",
    colorType: "",
    phoneModel: "",
    material: "",
    setColorName: () => {},
    setColorType: () => {},
    setPhoneModel: () => {},
    setMaterial: () => {},
};

export const CreateContext = createContext<CreateContextType>(CreateContextIntital);

const CreateProvider = ({ children }: { children: ReactNode }) => {
    const [colorName, setColorName] = useState<string>("Black");
    const [colorType, setColorType] = useState<string>("bg-black");
    const [phoneModel, setPhoneModel] = useState<string>("IPhone 15");
    const [material, setMaterial] = useState<string>("");

    return <CreateContext.Provider value={{ colorName, setColorName, colorType, setColorType, phoneModel, setPhoneModel, material, setMaterial }}>{children}</CreateContext.Provider>;
};

export default CreateProvider;
