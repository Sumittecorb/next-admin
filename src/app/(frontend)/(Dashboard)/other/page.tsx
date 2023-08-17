"use client";

import { useState } from "react";
import ProgrammingLanguage from "./prorammingLanguage";

const Category = () => {

    const [programmingLanguages, setProgrammingLanguages] = useState([]);

    const [inputFields, setInputFields] = useState([{
        id: 0,
        value: ""
    }])

    const handleProgrammingLanguagesChange = (languages:any) => {
        setProgrammingLanguages(languages);
    };

    const handleInputChange = (index: number, value: string) => {
        setInputFields(prevInputFields => {
            const newInputFields = [...prevInputFields];
            newInputFields[index].value = value;
            return newInputFields;
        });
    };

    const handleAdd = () => {
        const lastInputField = inputFields[inputFields.length - 1];
        if (lastInputField.value === "") {
            return;
        }
        setInputFields(prevInputFields => [...prevInputFields, { id: prevInputFields.length, value: "" }]);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("Programming Languages:", programmingLanguages);
    }

    return (
        <>
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                <div className="w-full px-6 py-6 mx-auto">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-none w-full max-w-full px-3">
                            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                    <h3 className="dark:text-white underline text-center">Others</h3>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-32 mt-10 px-10">
                                        <div>
                                            <ProgrammingLanguage onLanguagesChange={handleProgrammingLanguagesChange} />
                                        </div>
                                        <div>
                                            <h3>Add Category</h3>
                                            {inputFields?.map((field, index) => (
                                                <div className="w-full mb-6 md:mb-0 mt-10">
                                                    <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                                                        category
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={field.value}
                                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                        id="email"
                                                        name="email"
                                                    />
                                                </div>
                                            ))}
                                            <div className="text-center ">
                                                <button type="button" onClick={handleAdd} className="bg-black mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-10 mb-10">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Category