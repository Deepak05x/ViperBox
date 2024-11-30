import { Schema, models, model, Model, Document, Types } from "mongoose";

const ProductSchema = new Schema({
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
});

export interface IUser extends Document{
    name: string,
    email: string,
    image: string,
    provider: string,
    providerId: string,
    password: string,
    _id: Types.ObjectId,
    products?:[{
        productName: string,
        materialName: string,
        modelName: string,
        productColor: string,
        image: string,
    }],
}

const UserSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        select: false
    },
    email:{
        type: String,
        required: true,
    },
    image:{
        type:String
    },
    provider:{
        type : String,
        default:"credentials"
    },
    providerId:{
        type: String,
    },
    products: {
        type: [ProductSchema],
        default: [],
    },
}, {
    timestamps: true
})

const UserModel : Model<IUser> = models.User || model<IUser>('User', UserSchema)

export default UserModel


