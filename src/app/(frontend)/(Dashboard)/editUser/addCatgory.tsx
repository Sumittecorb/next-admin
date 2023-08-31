"use client";

import { ProgressDefault } from "@/components/progressBar/page";
import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import Select from "react-select";
import PersonalDetail from "./personalSummary";
import { useSearchParams } from "next/navigation";

function AddCategory({ setIsNext, isId }: { setIsNext: any, isId: any }) {
    const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string }[]>([]);
    const [isCategory, setIsCategory] = useState([])
    const [nextBtn, setNextBtn] = useState<boolean>()
    const pathName = useSearchParams()

    const id = pathName.get("_id")

    const colourOptions = isCategory.map((item: { _id: number; name: string; }) => ({
        value: item._id,
        label: item.name
    }));

    const categoryValues = selectedCategory.map((color) => {
        return {
            name: color.label,
            id: color.value
        };
    });

    useEffect(() => {
        getCategory()
    }, [])

    const handleCategoryChange = (selectedOptions: any) => {
        setSelectedCategory(selectedOptions)
    };

    const handleAdd = async () => {
        let reqBody = {
            id: id,
            categoryValues: [
                categoryValues
            ]
        }
        try {
            const response = await axios.put("/api/v1/user/updateUser", reqBody)
            console.log(response, "response");
        }
        catch (err: any) {
            console.log(err.message, "error")
        }
    }

    const getCategory = async () => {
        try {
            const res = await axios.get("/api/v1/user/category")
            setIsCategory(res?.data?.categoryList)
        }
        catch (err: any) {
            console.log(err, "error")
        }
    }

    return (
        <>
            {nextBtn ? <PersonalDetail isId={isId} /> :
                <>
                    <ProgressDefault value={3} />
                    <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h3 className="dark:text-white underline text-center">Add category</h3>
                    </div>
                    <div className="container content-center mx-auto mt-20 mb-5">
                        <Select
                            isMulti
                            name="colors"
                            onChange={handleCategoryChange}
                            options={colourOptions}
                            className="lg:w-1/2 w-full"
                            classNamePrefix="select"
                        />
                        <div className=" flex items-center justify-between ml-7 mb-3 mt-6">
                            <button onClick={() => { setIsNext(false) }} type="button" className={`bg-black "bg-gray-DEFAULT-500" text-white font-bold py-2 px-4 rounded`}>
                                Back
                            </button>
                            <button type="button" onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                            <button onClick={() => { setNextBtn(true) }} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                Next
                            </button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default AddCategory

