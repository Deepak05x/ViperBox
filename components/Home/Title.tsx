"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { TbStarFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Title = () => {
    return (
        <section className="flex lg:flex-row flex-col w-full lg:gap-24 gap-20 items-center justify-center py-24 sm:px-12 ssm:px-8">
            <section className="flex flex-col items-center lg:items-start justify-center gap-12">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:gap-2 gap-0 sm:text-5xl ssm:text-[2.85rem] ssm:leading-[3.5rem] sm:leading-0  lg:text-start text-center font-bold"
                >
                    Your Image on a
                    <span className="flex md:flex-row flex-col md:gap-6 sm:gap-1 text-green">
                        Custom<span className="text-black">Phone Case</span>
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                    className="flex flex-col text-[1rem] lg:text-start text-center text-black/70 font-semibold"
                >
                    Capture your favorite memories with your own case.<span>Viperbox allows you to protect your memories</span>
                </motion.p>
                <motion.section
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                    className="flex flex-col gap-2"
                >
                    <div className="flex sm:flex-row flex-col items-center gap-2">
                        <Check className="text-2xl text-green" />
                        <p className="font-bold text-lg  ssm:text-center">High-quality, durable material</p>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center gap-2">
                        <Check className="text-2xl text-green" />
                        <p className="font-bold text-lg">Modern models supported</p>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center gap-2">
                        <Check className="text-2xl text-green" />
                        <p className="font-bold text-lg">User friendly</p>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
                    className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-start"
                >
                    <div className="flex lg:ml-0 ml-2">
                        <Image src={"/user-1.png"} alt="user1" width={40} height={40} className="rounded-full " />
                        <Image src={"/user-2.png"} alt="user1" width={40} height={40} className="rounded-full translate-x-[-20%]" />
                        <Image src={"/user-3.png"} alt="user1" width={40} height={40} className="rounded-full translate-x-[-30%]" />
                        <Image src={"/user-4.jpg"} alt="user1" width={40} height={40} className="rounded-full translate-x-[-40%]" />
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-2">
                            <TbStarFilled className="text-green text-lg" />
                            <TbStarFilled className="text-green text-lg" />
                            <TbStarFilled className="text-green text-lg" />
                            <TbStarFilled className="text-green text-lg" />
                            <TbStarFilled className="text-green text-lg" />
                            <p className="font-bold mt-1">500+</p>
                        </div>
                        <div className="font-bold lg:text-start text-center">5-Star Reviews</div>
                    </div>
                </motion.section>
            </section>
            <motion.section
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
                className="flex  justify-center items-start"
            >
                <Image
                    src={"/phone-template.png"}
                    alt="phone"
                    width={250}
                    height={250}
                    className="md:w-[15rem] md:h-[30rem] sm:w-[12rem] sm:h-[24rem] lg:ml-0 sm:ml-[4rem] md:ml-[5rem] ssm:w-[10rem] ssm:h-[20rem] ssm:ml-[4rem]"
                />
                <Image src={"/your-image.png"} alt="your" width={150} height={150} className="w-[5rem] h-[5rem]" />
            </motion.section>
        </section>
    );
};

export default Title;
