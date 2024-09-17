import { Schema, model, models, Document, Model } from "mongoose";


interface IUser extends Document{
    email: string,
    password: string,
}

const ProfileUserSchema = new Schema<IUser>({
    email:{
        type: String,
        required: true,
    },
    password:{

    },
})

const ProfileUserModel : Model<IUser> = models.Profile || model<IUser>('Profile', ProfileUserSchema)

export default ProfileUserModel

