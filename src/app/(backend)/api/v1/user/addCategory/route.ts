import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Category from "@/app/model/category";

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { language } = reqBody
        const values = language.length
        for (var i = 0; i < values; i++) {
            const inserValue = language[i].name
            const newUser = new Category({
                name: inserValue
            })
            const savedUser = await newUser.save()
        }
        return NextResponse.json({ message: "Language Successfully added" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}