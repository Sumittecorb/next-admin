
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { connect } from "@/dbconfig/dbConfig";
 
connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { isAdmin, email, password } = reqBody;
        console.log(reqBody);

        //check if user exist
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        console.log("user exist")

        //check password is correct
        const validPassword = await bcryptjs.compare
            (password, user.password)
        if (!validPassword) {
            return NextResponse.json({
                error: "Invalid password"
            }, { status: 400 })
        }

        // const role = await User.findOne({ user.isAdmin })

        if (user.isAdmin === true) {
            return NextResponse.json({ error: "User Does not Exist" }, { status: 400 })
        }

        //create token data
        const tokenData = {
            id: user._id,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1hr" })

        const response = NextResponse.json({
            message: "Login Succesfully",
            success: true
        })
        response.cookies.set("userToken", token, {
            httpOnly: true,
            path: "/"
        })
        return response
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 })
    }
}