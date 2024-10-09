"use client";

import React, { ReactNode } from "react";
import { useState, createContext } from "react";

export interface CreateContextType {
    colorName: string;
    colorType: string;
    setColorName: React.Dispatch<React.SetStateAction<string>>;
    setColorType: React.Dispatch<React.SetStateAction<string>>;
}

const CreateContextIntital: CreateContextType = {
    colorName: "",
    colorType: "",
    setColorName: () => {},
    setColorType: () => {},
};

export const CreateContext = createContext<CreateContextType>(CreateContextIntital);

const CreateProvider = ({ children }: { children: ReactNode }) => {
    const [colorName, setColorName] = useState<string>("Black");
    const [colorType, setColorType] = useState<string>("bg-black");

    return <CreateContext.Provider value={{ colorName, setColorName, colorType, setColorType }}>{children}</CreateContext.Provider>;
};

export default CreateProvider;
