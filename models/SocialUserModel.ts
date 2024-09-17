import { Schema, models, model, Model, Document, Types } from "mongoose";

interface IUser extends Document{
    name: string,
    email: string,
    image?: string,
    _id: Types.ObjectId,
    provider: string,
    providerId: string,
}

const SocialUserSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
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
        required : true,
    },
    providerId:{
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const SocialUserModel : Model<IUser> = models.Social || model<IUser>('Social', SocialUserSchema)

export default SocialUserModel
