import { NextResponse } from "next/server";
import mongoDB from "./config";
import User from "./model";

mongoDB();

export async function GET(req: Request, res: Response) {
  let userss = await User.find({});
  console.log(userss);
  return NextResponse.json(userss);
}
