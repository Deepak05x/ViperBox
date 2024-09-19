import NextAuth, { Account, Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import connectToDb from './lib/db'
import UserModel from './models/UserModel'
import {AdapterUser} from "next-auth/adapters"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"; 

export const { handlers : {GET, POST}, signIn, signOut, auth} = NextAuth({
    session:{
        strategy: 'jwt'
    },
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:"consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:"consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }
        }),
        Credentials({
            credentials:{
                email:{ type: "email" },
                password: { type: "password" },
            },
            authorize : async(credentials)=>{

                const email = credentials.email as string 
                const password = credentials.password as string 

                console.log("Email: ", email);
                console.log("Password: ", password);

                if(credentials === null) return null

                try {

                    await connectToDb()

                    const user = await UserModel.findOne({email: email, provider:"credentials"}).select("+password")
                    if(!user){
                        console.log("user not found")
                        return null
                    }
                    console.log(password)
                    console.log(user.password)
                    const isMatch = await bcrypt.compare(password, user.password)
                    if(!isMatch){
                        console.log("Password is not matching")
                        return null
                    }
                    return user
                } catch (error) {
                    console.log("Authorization error for the note", error)
                    return null
                }
            }
        })
            
    ],
    callbacks:{
        async signIn({user, account} : {account : Account | null , user: User | AdapterUser}){
            await connectToDb()
            const existingUser = await UserModel.findOne({email : user.email, provider:account?.provider})
            if(!existingUser){
                await UserModel.create({
                    name: user.name,
                    email : user.email,
                    image: user.image,
                    provider: account?.provider,
                    providerId: account?.providerAccountId 
                })
            }
            return true
        },
        async session({session} : {session: Session}){
            if(session.user?.email){
                const dbUser = await UserModel.findOne({email: session.user.email})
                if(dbUser){
                    session.user.id = dbUser._id.toString()
                }else{
                    console.warn("User not found in the database")
                }
            }
            return session 
        }     
    }
})