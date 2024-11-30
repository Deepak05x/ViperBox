import { NextResponse } from 'next/server';
import connectToDb from "@/lib/db";
import UserModel from "@/models/UserModel";

export const PUT = async (req: Request) => {
  try {
    const { id, productData } = await req.json(); 

    if (!id || !productData) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
    await connectToDb();
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        $push: { products: { $each: productData } },
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    
    return NextResponse.json({ message: "Product added successfully", updatedUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
