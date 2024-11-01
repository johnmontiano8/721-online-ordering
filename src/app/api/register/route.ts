import User from "@/models/User";
import connect from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const {
    firstName,
    lastName,
    middleInitial,
    address,
    contactNo,
    email,
    username,
    password,
  } = await request.json();

  await connect();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use.", { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    middleInitial,
    address,
    contactNo,
    email,
    username,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered!", { status: 200 });
  } catch (err) {
    console.error("Error saving user:", err);
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
};
