import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
      // Connect to the database
      await prisma.$connect();
      

      // Extract email and password from request body
      const { email, password } = await req.json();

      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return NextResponse.json({ message: 'Invalid email or password' },{status:401});
      }
      console.log(email)
      // Verify the password
      const isValid = await compare(password, user.password);
      
      if (!isValid) {
        return NextResponse.json({ message: 'Invalid email or password' },{status:401});
      }
      
      // You might want to create a token or something similar here

      // Return user data (excluding password)
      const { password: _, ...userData } = user;
      return NextResponse.json({userData},{status:200});

    } catch (error) {
      return NextResponse.json({ message: 'Something went wrong', error },{status:500});
    } finally {
      // Disconnect from the database
      await prisma.$disconnect();
    }
  
}
