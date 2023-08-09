"use client";

import { ProgressDefault } from "@/components/progressBar/page";
import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import Select from "react-select";

function AddCategory({ setIsNext }: { setIsNext: any }) {
    const [selectedColors, setSelectedColors] = useState([]);
    const [isCategory, setIsCategory] = useState([])

    const colourOptions = isCategory.map((item: { _id: number; name: string; }) => ({
        value: item._id,
        label: item.name
    }));

    useEffect(() => {
        categoryList()
    }, [])

    const handleCategoryChange = (selectedOptions: any) => {
        setSelectedColors(selectedOptions)
    };

    const handleAdd = async () => {
        // console.log(selectedColors, "selectedColors");
        
        try {
            const response = await axios("/api/v1/user/updateUser")
            console.log(response,"response");
            
        }
        catch (err: any) {
            console.log(err.message, "error")
        }
    }

    const categoryList = async () => {
        try {
            const res = await axios.get("/api/v1/user/getCategory")
            setIsCategory(res?.data?.categoryList)
        }
        catch (err: any) {
            console.log(err, "error")
        }
    }

    return (
        <>
            <ProgressDefault value={3} />
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">Add category</h3>
            </div>
            <div className="container content-center mx-auto mt-20 mb-5">
                <Select
                    // defaultValue={[colourOptions[1], colourOptions[2]]}
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
                    <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddCategory

