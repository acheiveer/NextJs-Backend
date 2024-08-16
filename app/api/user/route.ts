import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        email:"singh@gamil.com",
        name:"Prabhakar"
    })
}
export async function POST(req: NextRequest){
    // extract the body 
    const body = await req.json();

    // store the body in the database
    console.log(body);

    return Response.json({
        message: "you are logged in "
    })
}