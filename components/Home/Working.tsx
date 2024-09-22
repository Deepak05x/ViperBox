"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const Phone = dynamic(() => import("@/components/Phone"));

const Working = () => {
    return (
        <section className="py-24 flex flex-col gap-24 items-center justify-center sm:px-12 ssm:px-8">
            <motion.h1
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                className="flex gap-2 flex-col text-center items-center sm:text-5xl ssm:text-[2.85rem] ssm:leading-[3.5rem] sm:leading-0 font-bold"
            >
                Upload your photos and{" "}
                <span>
                    get <span className="text-green">your own case</span> now
                </span>
            </motion.h1>
            <div className="flex lg:flex-row flex-col items-center gap-16 lg:gap-12">
                <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}>
                    <Image src={"/horse.jpg"} alt="horse" width={500} height={500} className="md:w-[20rem] ssm:w-[18rem] rounded-lg" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.75 }}>
                    <Image src={"/arrow.png"} alt="arrow" width={100} height={100} className="lg:rotate-0 rotate-90" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}>
                    <Phone imgSrc="/horse_phone.jpg" className="rounded-lg w-60" />
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }} className="flex flex-col gap-2">
                <div className="flex sm:flex-row flex-col items-center gap-2">
                    <Check className="text-2xl text-green" />
                    <p className="font-bold text-lg  ssm:text-center">High-quality, durable material</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-2">
                    <Check className="text-2xl text-green" />
                    <p className="font-bold text-lg ssm:text-center">Scratch resistance</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-2">
                    <Check className="text-2xl text-green" />
                    <p className="font-bold text-lg ssm:text-center">Wireless charging supported</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-2">
                    <Check className="text-2xl text-green" />
                    <p className="font-bold text-lg ssm:text-center">Fingerprint mark coating</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                <Button className="flex items-center gap-2">
                    Create your case <FaArrowRight className="text-sm" />
                </Button>
            </motion.div>
        </section>
    );
};

export default Working;
