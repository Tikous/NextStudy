import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  const body = await request.json();

  const validation = schema.safeParse(body);

  // Fetch the user with the given id
  if (!validation.success)
    // If invalid return 400
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10)
    // If doesn't exist return 404
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from db
  // If not found, return 404
  // Delete the user
  // Return 200
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({});
}
