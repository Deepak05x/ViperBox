"use client";

import React, { ReactNode } from "react";
import { useState, createContext } from "react";

interface CreateContextType {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

const CreateContextIntital = {
    color: "",
    setColor: () => {},
};

export const CreateContext = createContext<CreateContextType>(CreateContextIntital);

const CreateProvider = ({ children }: { children: ReactNode }) => {
    const [color, setColor] = useState<string>("black");

    return <CreateContext.Provider value={{ color, setColor }}>{children}</CreateContext.Provider>;
};

export default CreateProvider;
