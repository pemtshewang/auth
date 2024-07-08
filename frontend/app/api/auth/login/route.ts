import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    const { username, password } = await req.json();
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        //@ts-ignore
        where: {
            username: username
        }
    });
    if (user) {
        if (user.password == password) {
            return NextResponse.json({
                "message":
                    "Successful Authentication"
            },
                { status: 200 }
            )
        }
    }
            return NextResponse.json({
                "message":
                    "Your username or password is incorrect"
            },
                { status: 401 }
            )
} 