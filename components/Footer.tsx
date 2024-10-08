"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className="bg-black/90 text-white text-sm sm:px-32 px-12 py-8 flex ssm:flex-col md:flex-row gap-2 items-center justify-between">
            <motion.a
                href={"https://deepak-portfolio-woad.vercel.app/"}
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="font-serif tracking-wide hover:text-green cursor-pointer flex items-center gap-2"
            >
                DEEPAK <FaArrowRight className="text-sm" />
            </motion.a>
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }}>
                &#169;All Rights Reserved
            </motion.h1>
        </div>
    );
};

export default Footer;
