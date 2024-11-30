"use client";

import React from "react";
import { useContext, useState } from "react";
import { ConfigureContext } from "@/context/ConfigureProvider";
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";
import { SessionContext } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";

const Phone = dynamic(() => import("@/components/Phone"));

const Review = () => {
    const { uploadedImages, colorName, phoneModel, material, finish, setReviewSuccess } = useContext(ConfigureContext);
    const { session } = useContext(SessionContext);

    const router = useRouter();

    const downloadImage = async () => {
        const element = document.getElementById("download-img");
        if (element) {
            const canvas = await html2canvas(element);
            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "phone-customized-image.png";
            link.click();

            try {
                const res = await fetch("/api/configure", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: session?.id,
                        productName: "Phone",
                        materialName: material,
                        modelName: phoneModel,
                        productColor: colorName,
                        image: image,
                    }),
                });
                if (res.ok) {
                    console.log("Product uploaded");
                    setReviewSuccess(true);
                    router.push("/");
                } else {
                    console.log("Error in uploading");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh]">
            <section
                id="download-img"
                className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center xl:px-[13rem] lg:px-[10rem] py-8 border-2 border-dashed border-gray-300 rounded-xl"
            >
                <Phone imgSrc={uploadedImages} className={`w-60 order-1`} />
            </section>
            <section className="flex  flex-col overflow-y-auto items-start  h-full px-12 py-4 gap-8 ">
                <h1>Your Iphone Case</h1>
                <div>
                    <p>Color:</p>
                    <p>Red</p>
                </div>
                <div>
                    <p>Material:</p>
                    <p>Silicone</p>
                </div>
                <div>
                    <p>Finish:</p>
                    <p>Plastic</p>
                </div>
                <div onClick={() => downloadImage()}>Download</div>
            </section>
        </section>
    );
};

export default Review;
