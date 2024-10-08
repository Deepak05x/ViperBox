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

const CreateContext = createContext<CreateContextType>(CreateContextIntital);

const CreateProvider = ({ children }: { children: ReactNode }) => {
    const [color, setColor] = useState<string>("");

    return <CreateContext.Provider value={{ color, setColor }}>{children}</CreateContext.Provider>;
};

export default CreateProvider;
