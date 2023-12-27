import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import User from "../models/User";
import clientPromise from "./mongodb";
import Email from "next-auth/providers/email";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    throw new Error("Not Signed In");
  }
  const currentUser = await User.findOne({ email: session.user.email });
  if (!currentUser) {
    throw new Error("Not Signed In");
  }
  return { currentUser };
};

export default serverAuth;
