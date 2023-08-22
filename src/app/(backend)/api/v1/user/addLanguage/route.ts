import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Language from "@/app/model/language"

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { language } = reqBody
        const values = language.length
        for (var i = 0; i < values; i++) {
            const inserName = language[i].name
            const inserValue = language[i].value
            const newUser = new Language({
                name: inserName,
                value: inserValue
            })
            const savedUser = await newUser.save()
        }
        return NextResponse.json({ message: "Language added Successfully" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}