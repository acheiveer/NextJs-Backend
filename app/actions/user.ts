"use server"

import client from "@/db";

export async function signup(username: string, password: string){
     try {
         await client.user.create({
             data:{
                 username: username,
                 password: password
             }
         })
         return { success: true };
     } catch (error) {
         return { success: false };
     }
}