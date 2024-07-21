import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  return Response.json({
    email: "rajksd9@gmail.com",
    message: "Hello123",
  });
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  return Response.json({
    data: "User Successfully Created",
  });
}
