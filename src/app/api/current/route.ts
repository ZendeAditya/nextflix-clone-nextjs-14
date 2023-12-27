import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json({ currentUser });
  } catch (error) {
    return NextResponse.json({ error: "something went wrong!" });
  }
}
