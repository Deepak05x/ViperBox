"use client";

import React from "react";
import { useContext, useState, useEffect } from "react";
import { SessionContext } from "@/context/SessionProvider";
import { Product } from "@/models/ProductModel";
import dynamic from "next/dynamic";
import { ObjectId } from "mongoose";

const Navbar = dynamic(() => import("@/components/Navbar"));

const Dashboard = () => {
    const { products, session } = useContext(SessionContext);
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

    console.log(filteredProducts);
    console.log(filteredProducts);

    return (
        <div className="flex flex-col">
            <Navbar />
            {filteredProducts?.map((item, index) => (
                <div>
                    {item.productName}
                    {item.productColor}
                    <img src={item.image} />
                    <button onClick={() => handleDelete(item._id.toString())}>Click me</button>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
