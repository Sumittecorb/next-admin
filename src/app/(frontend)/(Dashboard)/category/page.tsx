"use client";
import axios from "axios";
import { useState } from "react";

const Category = () => {

    const [inputFields, setInputFields] = useState([{
        id: 0,
        value: ""
    }])

    const handleClick = (e: any) => {
        e.preventDefault()
        const newId = inputFields.length
        const newInputFields = [...inputFields, { id: newId, value: "" }]
        setInputFields(newInputFields)
    }

    const handleChange = (_id: number, value: string) => {
        const updatedInputFields = inputFields.map(field =>
            field.id === _id ? { ...field, value } : field
        );
        setInputFields(updatedInputFields);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const valuesArray = inputFields?.map((field => ({
            name: field.value
        })))
        const keyData = {
            categoryValues: valuesArray
        }
        const res = await axios.post("/api/v1/user/addCategory", keyData)
    }

    return (
        <>
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                <div className="w-full px-6 py-6 mx-auto">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-none w-full max-w-full px-3">
                            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                    <h3 className="dark:text-white underline text-center">Add category</h3>
                                </div>
                                <form onSubmit={handleSubmit} className="w-full md:w-1/4 mt-10">
                                    {inputFields.map(field => (
                                        <div className="mb-6">
                                            <div className="w-full px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                                                    category {field.id + 1}
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                                    id="email"
                                                    name="email"
                                                    onChange={(e) => { handleChange(field.id, e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center">
                                        <button type="button" onClick={handleClick} className="bg-black hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-blue-500 mb-5 hover:bg-blue-700 text-white mt-5 w-20 float-right font-bold py-2 px-4 border border-blue-700 rounded">Done</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
export default Category