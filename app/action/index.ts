"use server"

import {signIn, signOut} from "@/auth"


export const doLogin = async(formData : FormData) : Promise<void>=>{
    const action = formData.get('action') as string 
    await signIn(action,{redirectTo : "/"})
}

export const doLogout = async() : Promise<void>=>{
    await signOut({redirectTo : "/"})
}


export const doCredentials = async(formData: FormData): Promise<void>=>{
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    await signIn("credentials",{
        redirect: false,
        callbackUrl: "/",
        email,
        password,
    })
}


