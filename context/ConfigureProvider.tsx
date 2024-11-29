"use client";

import React from "react";
import { createContext, useState } from "react";

interface ConfigureContextType {
    uploadSuccess: boolean;
    setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    customizeSuccess: boolean;
    setCustomizeSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    reviewSuccess: boolean;
    setReviewSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    uploadedImages: string;
    setUploadedImages: React.Dispatch<React.SetStateAction<string>>;
    urlSuccess: boolean;
    setUrlSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    colorName: string;
    colorType: string;
    phoneModel: string;
    setColorName: React.Dispatch<React.SetStateAction<string>>;
    setColorType: React.Dispatch<React.SetStateAction<string>>;
    setPhoneModel: React.Dispatch<React.SetStateAction<string>>;
    material: string;
    finish: string;
    setMaterial: React.Dispatch<React.SetStateAction<string>>;
    setFinish: React.Dispatch<React.SetStateAction<string>>;
    cost: number;
    setCost: React.Dispatch<React.SetStateAction<number>>;
}

const InitialValues: ConfigureContextType = {
    uploadSuccess: false,
    setUploadSuccess: () => {},
    customizeSuccess: false,
    setCustomizeSuccess: () => {},
    reviewSuccess: false,
    setReviewSuccess: () => {},
    uploadedImages: "",
    setUploadedImages: () => {},
    urlSuccess: false,
    setUrlSuccess: () => {},
    colorName: "",
    colorType: "",
    phoneModel: "",
    setColorName: () => {},
    setColorType: () => {},
    setPhoneModel: () => {},
    material: "",
    finish: "",
    setMaterial: () => {},
    setFinish: () => {},
    cost: 0,
    setCost: () => {},
};

export const ConfigureContext = createContext<ConfigureContextType>(InitialValues);

const ConfigureProvider = ({ children }: { children: React.ReactNode }) => {
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
    const [customizeSuccess, setCustomizeSuccess] = useState<boolean>(false);
    const [reviewSuccess, setReviewSuccess] = useState<boolean>(false);
    const [urlSuccess, setUrlSuccess] = useState<boolean>(false);
    const [uploadedImages, setUploadedImages] = useState<string>("");
    const [colorName, setColorName] = useState<string>("Black");
    const [colorType, setColorType] = useState<string>("bg-black");
    const [phoneModel, setPhoneModel] = useState<string>("IPhone 15");
    const [material, setMaterial] = useState<string>("");
    const [finish, setFinish] = useState<string>("");
    const [cost, setCost] = useState<number>(0);

    return (
        <ConfigureContext.Provider
            value={{
                cost,
                setCost,
                material,
                setMaterial,
                finish,
                setFinish,
                colorName,
                setColorName,
                colorType,
                setColorType,
                phoneModel,
                setPhoneModel,
                urlSuccess,
                setUrlSuccess,
                uploadedImages,
                setUploadedImages,
                uploadSuccess,
                setUploadSuccess,
                customizeSuccess,
                setCustomizeSuccess,
                reviewSuccess,
                setReviewSuccess,
            }}
        >
            {children}
        </ConfigureContext.Provider>
    );
};

export default ConfigureProvider;
