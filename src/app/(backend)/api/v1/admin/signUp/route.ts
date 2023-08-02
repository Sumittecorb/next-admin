import {Admin} from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { isAdmin, email, password } = reqBody

        console.log(reqBody);
        //check user already exist 
        const user = await Admin.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exist" }, { status: 400 })
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
            (password, salt)

        const newAdmin = new Admin({
            email,
            isAdmin,
            password: hashedPassword
        })

        const savedAdmin = await newAdmin.save()
        console.log(savedAdmin);

        return NextResponse.json({
            message: "Admin created Successfully",
            success: true,
            savedAdmin
        })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }),
            { status: 500 }
    }
}

