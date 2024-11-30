import connectToDb from "@/lib/db";
import { NextResponse } from "next/server";
import ProductModel from "@/models/ProductModel"


export const GET = async()=>{
    try {
        await connectToDb()
        const products = await ProductModel.find()
        return NextResponse.json({products}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: "Product Api is not working"}, {status: 404})
    }
}