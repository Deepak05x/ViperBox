"use client";

import React, { ReactNode } from "react";
import { useState, createContext } from "react";

export interface CreateContextType {
    material: string;
    totalMoney: number;
    finish: string;
    setFinish: React.Dispatch<React.SetStateAction<string>>;
    setTotalMoney: React.Dispatch<React.SetStateAction<number>>;

    setMaterial: React.Dispatch<React.SetStateAction<string>>;
}

const CreateContextIntital: CreateContextType = {
    material: "",
    totalMoney: 0,
    finish: "",
    setFinish: () => {},
    setTotalMoney: () => {},
    setMaterial: () => {},
};

export const CreateContext = createContext<CreateContextType>(CreateContextIntital);

const CreateProvider = ({ children }: { children: ReactNode }) => {
    const [material, setMaterial] = useState<string>("");
    const [finish, setFinish] = useState<string>("");
    const [totalMoney, setTotalMoney] = useState<number>(5);

    return <CreateContext.Provider value={{ material, setMaterial, totalMoney, setTotalMoney, finish, setFinish }}>{children}</CreateContext.Provider>;
};

export default CreateProvider;
