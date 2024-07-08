import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    const { username, password } = await req.json();
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
        data:{
            username,
            password
        }
    });
    return NextResponse.json({
        "message":"You are registered to the system successfully"
    },{
        status:201
    })
} 