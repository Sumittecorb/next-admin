import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Language from "@/app/model/language"

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { categoryValues } = reqBody
        const values = categoryValues.length
        for (var i = 0; i < values; i++) {
            const inserValue = categoryValues[i].name
            const newUser = new Language({
                name: inserValue
            })
            const savedUser = await newUser.save()
        }
        return NextResponse.json({ message: "Category Successfully added" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}