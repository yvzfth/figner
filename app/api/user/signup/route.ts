import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // db connect
  db.$connect();

  const request = await req.json();

  // check if user exists
  const isUserExists = await db.user.findFirst({
    where: { email: String(request?.data?.email)! },
  });

  if (isUserExists)
    return NextResponse.json({ message: 'User Already Exists...!' });

  // hash password and add to db
  await db.user
    .create({
      data: {
        firstName: String(request?.data?.name),
        lastName: String(request?.data?.lastname),
        email: String(request?.data?.email),
        password: await hash(String(request?.data?.password), 12),
      },
    })
    .then((value) => NextResponse.json({ user: value }))
    .catch((reason) => NextResponse.json({ reason }));

  // disconnect db
  db.$disconnect();

  return NextResponse.json(request?.data);
}
