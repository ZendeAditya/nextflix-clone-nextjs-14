import bcrypt from "bcrypt";
import prismadb from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
export const POST = async (req: any) => {
  try {
    const { email, name, password } = req.body;
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      console.error("Email already taken");
      return NextResponse.json({ error: "Email taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
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
