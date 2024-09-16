"use server"

import {signIn, signOut} from "@/auth"

export const doLogin = async(formData : FormData) : Promise<void>=>{
    const action = formData.get('action') as string 
    await signIn(action,{redirectTo : "/"})
}

export const doLogout = async() : Promise<void>=>{
    await signOut({redirectTo : "/"}) as {redirectTo: string}
}