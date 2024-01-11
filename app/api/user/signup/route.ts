import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // db connect
    db.$connect();

    const request = await req.json();
    console.log(request);
    // check if user exists
    const isUserExists = await db.user.findFirst({
        where: { email: String(request?.email)! },
    });

    if (isUserExists)
        return NextResponse.json({ message: "User Already Exists...!" });

    // hash password and add to db
    await db.user
        .create({
            data: {
                firstname: String(request?.firstname),
                lastname: String(request?.lastname),
                email: String(request?.email),
                password: await hash(String(request?.password), 12),
            },
        })
        .then((value) => NextResponse.json({ user: value }))
        .catch((reason) => NextResponse.json({ reason }));

    // disconnect db
    db.$disconnect();

    return NextResponse.json(request?.data);
}
