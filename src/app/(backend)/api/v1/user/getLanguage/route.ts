import Language from "@/app/model/language";
import { NextRequest, NextResponse } from "next/server";

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