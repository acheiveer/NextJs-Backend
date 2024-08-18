import { NextRequest } from "next/server"
import {PrismaClient} from "@prisma/client"
const client = new PrismaClient();

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
    const user = await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    console.log(user.id)

    return Response.json({
        message: "you are signed up "
    })
}