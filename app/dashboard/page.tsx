"use client";

import React from "react";
import { useContext, useState, useEffect } from "react";
import { SessionContext } from "@/context/SessionProvider";
import { Product } from "@/models/ProductModel";
import dynamic from "next/dynamic";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const Dashboard = () => {
    const { products, session } = useContext(SessionContext);

    console.log(products)

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (session?.id) {
            setFilteredProducts((products || [])?.filter((item) => item.user.toString() === session?.id));
        }
    }, [products, session]);

    const handleDelete = async (id: string): Promise<void> => {
        try {
            const res = await fetch("/api/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (res.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen justify-between ">
            <Navbar />
            <h1 className="text-center text-5xl font-bold flex md:flex-row flex-col items-center justify-center gap-3 pt-24">
                Check Out Your <span className="text-green">Creations</span>
            </h1>
            <section className="flex flex-col items-center gap-8 w-full py-24">
                {filteredProducts?.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between border-[2px] w-[30rem] py-4 px-4 border-gray-300 border-dashed gap-8">
                        <img alt="phone" src={item.image} className="w-[10rem] h-[10rem]" />
                        <div className="flex flex-col items-start gap-4 text-green font-bold">
                            <p>
                                <span className="text-black mr-2">Model:</span>
                                {item.modelName}
                            </p>
                            <p>
                                <span className="text-black mr-2">Material:</span>
                                {item.materialName}
                            </p>
                            <p>
                                <span className="text-black mr-2">Color:</span>
                                {item.productColor}
                            </p>
                            <Button variant={"destructive"} size={"sm"} onClick={() => handleDelete(item._id.toString())} className="flex flex-row items-center gap-2">
                                <span>
                                    <Trash className="text-white w-[1rem] h-[1rem] " />
                                </span>
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default Dashboard;
