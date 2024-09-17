"use server"

import { NextResponse } from "next/server"

export const POST = async(request: Request) : Promise<NextResponse> =>{
    const {name, email, password} = await request.json()
    console.log(name, email, password)

    return NextResponse.json("User has been created", {status: 201})

}