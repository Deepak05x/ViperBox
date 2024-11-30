import { NextResponse } from 'next/server';
import connectToDb from "@/lib/db";
import UserModel from "@/models/UserModel";
import ProductModel from '@/models/ProductModel';

export const POST = async (req: Request) => {
  try {
    const { id, productName, materialName, modelName, productColor, image} = await req.json(); 
    
    await connectToDb();

    const user = await UserModel.findById(id)

    if(!user){
      return NextResponse.json({error: "User not found"},{status: 404})
    }


    const newProduct = await ProductModel.create({ 
        productName,
        materialName,
        modelName,
        productColor,
        image,
        user: id,
      })

      return NextResponse.json({message: "Product Created Successfully", product: newProduct})
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
