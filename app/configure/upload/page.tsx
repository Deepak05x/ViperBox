"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ConfigureContext } from "@/context/ConfigureProvider";
import { useContext } from "react";

const upload: React.FC = () => {
    const router = useRouter();

    const { setUploadSuccess, setUploadedImages, uploadedImages, urlSuccess, setUrlSuccess } = useContext(ConfigureContext);

    const onUploadComplete = async (result: any): Promise<void> => {
        try {
            const url = await result?.info?.secure_url;
            if (url) {
                console.log(url);
                setUploadedImages(url);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onDeleteImage = () => {
        setUploadedImages("");
        setUrlSuccess(false);
        setUploadSuccess(false);
    };

    const onSubmitComplete = () => {
        setUploadSuccess(true);
        router.push("/configure/design");
    };

    return (
        <div className="bg-white/70  border-[3px] border-dashed border-gray-400 w-[50rem] h-[25rem] py-8  flex flex-col items-center">
            {urlSuccess ? (
                <div className="flex flex-col items-center justify-between w-full h-full">
                    <img src={uploadedImages} alt="uploaded image" className="w-[15rem] h-[15rem]" />
                    <div className="flex flex-row items-center gap-4">
                        <Button onClick={() => onDeleteImage()}>Delete</Button>
                        <Button onClick={() => onSubmitComplete()}>Upload</Button>
                    </div>
                </div>
            ) : (
                <CldUploadWidget uploadPreset="Viperbox" onSuccess={onUploadComplete} onClose={() => setUrlSuccess(true)}>
                    {({ open }) => {
                        return (
                            <div className="flex items-center justify-center w-full flex-row">
                                <Button onClick={() => open()}>
                                    <p>Upload</p>
                                </Button>
                            </div>
                        );
                    }}
                </CldUploadWidget>
            )}
        </div>
    );
};

export default upload;
