"use client";

import React from "react";
import { useContext, useState } from "react";
import { ConfigureContext } from "@/context/ConfigureProvider";
import dynamic from "next/dynamic";

const Phone = dynamic(() => import("@/components/Phone"));

const Review = () => {
    const { uploadedImages } = useContext(ConfigureContext);

    return (
        <section className="flex flex-row w-full items-center  justify-center h-[80vh]">
            <section className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center xl:px-[13rem] lg:px-[10rem] py-8 border-2 border-dashed border-gray-300 rounded-xl">
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
            </section>
        </section>
    );
};

export default Review;
