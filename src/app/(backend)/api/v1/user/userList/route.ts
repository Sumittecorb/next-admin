import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModels";
import connectMongo from "@/dbconfig/dbConfig";

connectMongo();

export async function GET(request: NextRequest) {
  try {
    const userList = await User.find();
    if (userList.length == 0) {
      return NextResponse.json({ error: "No Data Found" }, { status: 404 });
    } else {
      return NextResponse.json({ userList });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
