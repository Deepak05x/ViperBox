import { signIn } from "@/auth";
import connectToDb from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async(request : Request) : Promise<NextResponse> =>{

    const {email, password} = await request.json()

    try{

        await connectToDb()
        await signIn("credentials",{
            redirect: false,
            callbackUrl : "/",
            email,
            password
        })
    }catch(error : unknown){
        return NextResponse.json(error, {status: 500})
    }

    return NextResponse.json("User logged in successfully", {status: 201})
    
}