import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import User from "@/app/model/userModel"
import connectMongo from "@/dbconfig/dbConfig";

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { isAdmin, email, password } = reqBody

        // console.log(reqBody);
        //check user already exist 
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exist" }, { status: 400 })
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
            (password, salt)

        const newUser = new User({
            email,
            isAdmin,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        // console.log(savedUser);

        return NextResponse.json({
            message: "user created Successfully",
            success: true,
            savedUser
        })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }),
            { status: 500 }
    }
}