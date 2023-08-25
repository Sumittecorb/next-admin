import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Category from "@/app/model/category";

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { categoryValues } = reqBody
        const values = categoryValues.length
        for (var i = 0; i < values; i++) {
            const inserValue = categoryValues[i].name
            const newUser = new Category({
                name: inserValue
            })
            const savedUser = await newUser.save()
        }
        return NextResponse.json({ message: "Category added Successfully" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}