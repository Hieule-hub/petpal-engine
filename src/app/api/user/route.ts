import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    // const params = await request.json();

    try {
        const user = await prisma.user.findMany();
        return new NextResponse(JSON.stringify(user), {
            status: 200
        });
    } catch (error: any) {
        console.log("🚀 ~ GET ~ error:", error);
        return new NextResponse(JSON.stringify(error?.response?.data), {
            status: error?.response?.status || 400
        });
    }
}
