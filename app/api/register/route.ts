"use server"

import connectToDb from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import { createUser } from "@/app/action";

export interface RegUser{
    name: string,
    password: string,
    email: string
}

export const POST = async(request: Request) : Promise<NextResponse> =>{
    const {name, email, password} = await request.json()
    await connectToDb()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser={
        name,
        password: hashedPassword,
        email,   
    }
    try {
        await createUser(newUser)
    } catch (error : unknown) {
        return NextResponse.json(error, {status: 500})
    }
    
    return NextResponse.json("User created successfully", {status: 201})

}