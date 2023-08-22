import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import ProgrammingLanguage from "@/app/model/programmingLan"

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { programminglanguage } = reqBody
        const values = programminglanguage.length
        for (var i = 0; i < values; i++) {
            const inserName = programminglanguage[i].name
            const inserValue = programminglanguage[i].progress
            const newUser = new ProgrammingLanguage({
                name: inserName,
                progress: inserValue
            })
            const savedUser = await newUser.save()
            console.log(savedUser, "savedUser");
        }
        return NextResponse.json({ message: "Programming language added Successfully" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}