import connectToDb from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async(req : Request)=>{
    const {id} = req.json()
}