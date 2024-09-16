import NextAuth, { Account, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import connectToDb from './lib/db'
import User from './models/UserModel'
import {AdapterUser} from "next-auth/adapters"


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
        async signIn({user, account}){
            await connectToDb()
            const existingUser = await User.findOne({email : user.email})
            if(!existingUser){
                await User.create({
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
                const dbUser = await User.findOne({email: session.user.email})
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