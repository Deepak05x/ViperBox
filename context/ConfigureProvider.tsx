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
};

export const ConfigureContext = createContext<ConfigureContextType>(InitialValues);

const ConfigureProvider = ({ children }: { children: React.ReactNode }) => {
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
    const [customizeSuccess, setCustomizeSuccess] = useState<boolean>(false);
    const [reviewSuccess, setReviewSuccess] = useState<boolean>(false);
    const [urlSuccess, setUrlSuccess] = useState<boolean>(false);
    const [uploadedImages, setUploadedImages] = useState<string>("");

    return (
        <ConfigureContext.Provider
            value={{ urlSuccess, setUrlSuccess, uploadedImages, setUploadedImages, uploadSuccess, setUploadSuccess, customizeSuccess, setCustomizeSuccess, reviewSuccess, setReviewSuccess }}
        >
            {children}
        </ConfigureContext.Provider>
    );
};

export default ConfigureProvider;
