import NextAuth, { Account, Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import connectToDb from './lib/db'
import UserModel from './models/UserModel'
import {AdapterUser} from "next-auth/adapters"
import CredentialsProvider from 'next-auth/providers/credentials'



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