import { NextResponse, NextRequest } from "next/server";
import connectMongo from "@/dbconfig/dbConfig";
import Category from "@/app/model/category";

export async function GET(request: NextRequest) {
    try {
        const categoryList = await Category.find()
        if (categoryList.length == 0) {
            return NextResponse.json({ error: "No Category Found" }, { status: 404 })
        }
        else {
            return NextResponse.json({ categoryList });
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}