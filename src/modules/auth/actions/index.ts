"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"

export const getUserById = async (id:string)=>{
    try {
        const user = await db.user.findUnique({
            where:{id},
            include:{
                accounts:true,
            }
        })
        return user
    } catch (error) {
        console.log("getUserById error",error)
    }
}

export const getAccountByUserId = async (userId:string)=>{
    try {
        const account = await db.account.findFirst({
            where:{userId}
        })
        return account
    } catch (error) {
        console.log("getAccountByUserId error",error)

    }
}
export const getCurrentUser = async ()=>{
    try {
        const user = await auth()
        return user?.user
        
    } catch (error) {
        console.log("getCurrentUser error",error)
    }
}