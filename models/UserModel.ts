import { Schema, models, model, Model, Document } from "mongoose";

interface IUser extends Document{
    name: string,
    email: string,
    image?: string
}

const UserSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type:String
    },
}, {
    timestamps: true
})

const User : Model<IUser> = models.User || model<IUser>('User', UserSchema)

export default User