"use server"

import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
    try {
        const session = await auth(); 
         if (!session) {
            return NextResponse.json({ error: "No session found" }, { status: 401 });
        }
        return NextResponse.json(session); 
    } catch (error: unknown) {  
        return NextResponse.json("There is a error in fetching session", {status : 500})
    }
};

