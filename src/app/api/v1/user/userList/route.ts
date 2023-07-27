import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModels";
import { connect } from "@/dbconfig/dbConfig";
import bcryptjs from "bcryptjs"

connect()

export async function GET(request: any) {
    try {
        const userList = await User.find()
        if (userList.length == 0) {
            return NextResponse.json({ error: "No Data Found" }, { status: 404 })
        }
        else{
            return NextResponse.json({userList})
        }

    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }),
            { status: 500 }
    }
}