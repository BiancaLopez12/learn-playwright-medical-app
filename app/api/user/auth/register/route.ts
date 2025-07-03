import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const user = await prisma.user.create({
    data: { name, email},
  });

  return NextResponse.json({ message: 'Usuario registrado', user: { id: user.id, email: user.email } });
}
