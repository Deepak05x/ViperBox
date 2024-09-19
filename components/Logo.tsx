"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }} className="text-2xl font-bold">
            <Link href={"/"}>
                Viper<span className="text-green">box</span>
            </Link>
        </motion.div>
    );
};

export default Logo;
