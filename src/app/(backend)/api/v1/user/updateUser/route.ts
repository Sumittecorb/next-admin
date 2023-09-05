import { NextRequest, NextResponse } from "next/server";
import User from "@/app/model/userModel"
import connectMongo from "@/dbconfig/dbConfig";

connectMongo()

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { id, menu, name, email, title, description, shortDescription, designation, categoryValues, employeeDetails, educationalDetail } = reqBody
        const obj = {
            email: email,
            name: name,
            title: title,
            menu: menu,
            shortDescription: shortDescription,
            description: description,
            designation: designation,
            categoryValues: categoryValues,
            employeeDetail: employeeDetails,
            educationalDetail: educationalDetail
        }

        const updateUser = await User.findByIdAndUpdate({ _id: id }, { $set: obj }, { new: true })
        if (id && updateUser) {
            return NextResponse.json({ message: "success", code: 200, data: updateUser })
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}