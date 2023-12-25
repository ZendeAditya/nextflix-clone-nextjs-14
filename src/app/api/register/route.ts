import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import connectDB from "@/app/helper/connectdb";
import { resourceUsage } from "process";

export const POST = async (req: any) => {
  try {
    const { email, name, password } = await req.json();
    await connectDB();
    const existingUser = await User.findOne({ email });
    console.log(email, name, password);
    console.log(existingUser);
    if (existingUser) {
      console.error("Email already taken");
      return NextResponse.json({ error: "Email taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      data: {
        name,
        email,
        password: hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    console.log("user", user);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong!" },
      { status: 400 }
    );
  }
};

// export const POST = async (req: any) => {
//   await connectDB();
//   const { user, email, password } = await req.json();
//   return NextResponse.json({ user, email, password });
// };

export const GET = async () => {
  return NextResponse.json({ name: "aditya zende" });
};
