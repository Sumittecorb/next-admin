import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Language from "@/app/model/language"

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { language } = reqBody
        console.log(reqBody,"reqBody");
        
        const values = language.length
        console.log(values,"values");
        
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

export async function GET(request: NextRequest) {
    try {
        const languageList = await Language.find()
        if (languageList.length==0) {
            return NextResponse.json({ error: "No Language Found" }, { status: 404 })
        }
        else{
            return NextResponse.json({languageList})
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}