import { NextRequest } from "next/server"
import client from "@/db"

export async function GET(req: NextRequest){
    const user = await client.user.findFirst({})
    return Response.json({
        email:"singh@gamil.com",
        name: user?.username
    })
}
export async function POST(req: NextRequest){
    // extract the body 
    const body = await req.json();

    // headers
    // console.log(req.headers.get("authorization"));
    
    // Query parameters
    // console.log(req.nextUrl.searchParams.get("name"));

    // store the body in the database
    try {
        await client.user.create({
            data:{
                username: body.username,
                password: body.password
            }
        })
        return Response.json({
            message: "you are signed up "
        })
    } catch (error) {
        return Response.json({
            message: "Error while signing up"
        },{
            status:411
        })
    }
}