import { Schema, models, model, Model, Document, Types } from "mongoose";
import { IUser } from "./UserModel";

export interface Product extends Document{
    productName: string,
    materialName: string,
    modelName: string,
    productColor: string,
    image: string,
    _id: Types.ObjectId,
    user: Types.ObjectId | IUser 
}

const ProductSchema = new Schema<Product>({
  productName: {
    type: String,
    required: true,
  },
  materialName: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
  },
  productColor: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const ProductModel : Model<Product> = models.Product || model<Product>("Product", ProductSchema)

export default ProductModel