"use client";

import React from "react";
import { TbStarFilled } from "react-icons/tb";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Customer = () => {
    return (
        <section className="bg-gray-50 border-t border-b border-dashed border-gray-300 py-24 items-center flex flex-col px-12 gap-24 justify-center">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="sm:text-5xl lg:text-start text-center ssm:text-[2.85rem] font-bold"
            >
                What Our <span className="text-green">Customer</span> Says
            </motion.h1>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-24 items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:gap-8 gap-5 items-center justify-center"
                >
                    <div className="flex text-green text-lg gap-1">
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                    </div>
                    <div className="md:max-w-[70%] max-w-[90%]  text-center font-medium">
                        &quot;Ive always wanted a phone case that reflects my personal style, and Viper Box made that possible. The design tool was intuitive and fun to use, letting me add my own
                        artwork and choose colors that match my vibe.
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src={"/user-3.png"} alt="user-3" width={50} height={50} className="rounded-full" />
                        <div className="flex flex-col items-start">
                            <p className="text-[1rem] font-bold">Emily</p>
                            <div className="flex items-center gap-1">
                                <Check className="text-green" />
                                <p className="text-sm">Verified Purchase</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:gap-8 gap-5 items-center justify-center"
                >
                    <div className="flex text-green  text-lg gap-1">
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                    </div>
                    <div className="md:max-w-[70%] max-w-[90%] text-center font-medium">
                        &quot;Creating my own phone case with Viper Box was an amazing experience! The platform is incredibly easy to navigate, allowing me to upload my favorite images and customize
                        everything just the way I wanted
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src={"/user-1.png"} alt="user-1" width={50} height={50} className="rounded-full" />
                        <div className="flex flex-col items-start">
                            <p className="text-[1rem] font-bold">Jonathan</p>
                            <div className="flex items-center gap-1">
                                <Check className="text-green" />
                                <p className="text-sm">Verified Purchase</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Customer;
