import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import User from "@/models/userModels";

connectMongo()
export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { id, menu, name, email, title, description, shortDescription, designation } = reqBody
        const obj = {
            email: email,
            name: name,
            title: title,
            menu: menu,
            shortDescription: shortDescription,
            description: description,
            designation: designation
        }
        const updateUser = await User.updateOne({ _id: id }, { $set: obj })
        if (id && updateUser) {
            return NextResponse.json({ message: "success", code: 200, data: updateUser })
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}