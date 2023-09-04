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