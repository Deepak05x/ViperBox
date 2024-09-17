"use server"

import {signIn, signOut} from "@/auth"
import { RegUser } from "../api/register/route"
import UserModel from "@/models/UserModel"

export const doLogin = async(formData : FormData) : Promise<void>=>{
    const action = formData.get('action') as string 
    await signIn(action,{redirectTo : "/"})
}

export const doLogout = async() : Promise<void>=>{
    await signOut({redirectTo : "/"})
}

export const createUser = async(user : RegUser): Promise<void>=>{
    try {
        await UserModel.create(user)
    } catch (error) {
        throw new Error("User creating function has some error")
    }
    
}