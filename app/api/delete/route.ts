import connectToDb from "@/lib/db";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (req: Request) => {
    try {
        const { id } = await req.json();
        await connectToDb();
        
        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }
       
        const objectId = mongoose.Types.ObjectId.createFromHexString(id);
        console.log(objectId)

        const result = await ProductModel.findOneAndDelete({ _id: objectId });

        if (!result) {
            return NextResponse.json({ error: "No product found with this ID" }, { status: 404 });
        }
        return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error in /api/delete route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
