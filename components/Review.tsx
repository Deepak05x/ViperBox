"use client";

import React, { useState } from "react";
import { useContext } from "react";
import { ConfigureContext } from "@/context/ConfigureProvider";
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";
import { SessionContext } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Loader, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Phone = dynamic(() => import("@/components/Phone"));

const Review = () => {
    const { uploadedImages, colorName, phoneModel, material, finish, cost, setReviewSuccess } = useContext(ConfigureContext);
    const { session } = useContext(SessionContext);

    const [loading, setLoading] = useState<boolean>(false);

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
            setLoading(true);
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
                    setReviewSuccess(true);
                    router.push("/");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    console.log("Error in uploading");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex lg:flex-row flex-col w-full items-center justify-center lg:h-[80vh] h-full lg:gap-0 gap-12"
        >
            <section
                id="download-img"
                className="bg-gray-50 h-full flex flex-col gap-12 items-center justify-center xl:px-[13rem] lg:px-[10rem] md:px-[8rem] sm:px-[5rem] ssm:px-[2rem] py-8 border-2 border-dashed border-gray-300 rounded-xl"
            >
                <Phone imgSrc={uploadedImages} className={`w-60 order-1`} />
            </section>
            <section className="flex flex-col overflow-y-auto lg:items-start items-center lg:text-start text-center justify-start h-full px-12 py-4 gap-12 ">
                <h1 className="text-3xl font-bold">
                    Your <span className="text-green">{phoneModel}</span> Case
                </h1>
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Color:</p>
                    <p className="text-green font-bold">{colorName}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Material:</p>
                    <p className="text-green font-bold">{material}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Finish:</p>
                    <p className="text-green font-bold">{finish}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Cost:</p>
                    <p className="text-green font-bold">{cost}</p>
                </div>
                <Button
                    onClick={() => downloadImage()}
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-white ${
                        loading ? "bg-green cursor-not-allowed" : "bg-green hover:bg-black "
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green transition-colors`}
                    disabled={loading}
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {loading ? <Loader className="h-5 w-5 text-white animate-spin" /> : <ArrowRight className="h-5 w-5 text-white " />}
                    </span>
                    {loading ? "Downloading..." : "Download and Confirm"}
                </Button>
            </section>
        </motion.section>
    );
};

export default Review;
