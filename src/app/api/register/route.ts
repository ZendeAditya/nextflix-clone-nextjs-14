import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";
import connectDB from "@/app/helper/connectdb";
export const POST = async (req: any) => {
  try {
    const { email, name, password } = req.body;
    await connectDB();
    const existingUser = await UserModel.findOne({ email });
    console.log(email, name, password);
    if (existingUser) {
      console.error("Email already taken");
      return NextResponse.json({ error: "Email taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      data: {
        email,
        name,
        password: hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    console.log("user", user);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
