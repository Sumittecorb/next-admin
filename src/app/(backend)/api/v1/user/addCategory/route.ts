import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import User from "@/app/model/userModel";

connectMongo()

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { categoryValues, id } = reqBody
        const arr = {
            categoryValues: categoryValues
        }

        const user = await User.findOne({ _id: id })
        if (user && id) {
            const updateUser = await User.updateOne({ _id: id },
                { $set: arr, })
            if (updateUser) {
                return NextResponse.json({ message: "success", code: 200 })
            }
        }
        else {
            return NextResponse.json({ error: "User not exist" }, { status: 400 })
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}