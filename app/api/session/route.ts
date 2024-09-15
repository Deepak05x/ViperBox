import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
    try {
        const session = await auth(); 
        return NextResponse.json(session); 
    } catch (error: unknown) { 
        console.error(error); 
        return new NextResponse(null, { status: 500 });
    }
};

