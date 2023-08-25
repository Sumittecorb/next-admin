import { NextRequest, NextResponse } from "next/server";
import ProgrammingLanguage from "@/app/model/programmingLan";

export async function GET(request: NextRequest) {
    try {
        const programmingLanList = await ProgrammingLanguage.find()
        if (programmingLanList.length == 0) {
            return NextResponse.json({ error: "No Programming Language found" }, { status: 404 })
        }
        else {
            return NextResponse.json({ programmingLanList })
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}