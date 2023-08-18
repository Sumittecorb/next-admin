"use client";

import { useState } from "react";
import Language from "./language";
import ProgrammingLan from "./programmingLan";
import Category from "./category";

const OtherSection = () => {
    const [isTab, setIsTab] = useState("category")
    const [inputValues, setInputValues] = useState<any>([]);
    const [inputFields, setInputFields] = useState([{
        id: 0,
        value: ""
    }])

    // const handleInputChange = (index: number, value: string) => {
    //     setInputFields(prevInputFields => {
    //         const newInputFields = [...prevInputFields];
    //         newInputFields[index].value = value;
    //         return newInputFields;
    //     })
    // }

    // const handleInputValueChange = (index: any, value: string) => {
    //     const newInputValues = [...inputValues]
    //     newInputValues[index] = value
    //     setInputValues(newInputValues)
    // }

    // const handleAdd = () => {
    //     const lastInputField = inputFields[inputFields.length - 1];
    //     if (lastInputField.value === "") {
    //         return
    //     }
    //     setInputFields(prevInputFields => [...prevInputFields, { id: prevInputFields.length, value: "" }]);
    // }

    // const handleSubmit = (e: any) => {
    //     e.preventDefault()
    //     console.log("Input Values:", inputValues);
    //     // console.log("Programming Languages:", programmingLanguages);        
    // }


    return (
        <>
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                <div className="w-full px-6 py-6 mx-auto">
                    <div className="w-full h-[253px] bg-white p-5 rounded-xl">
                        <div className="flex">
                            <button className={isTab === "category" ? "bg-black text-white px-5 py-2 font-bold" : " border border-[#ccc] px-5 py-2 "} onClick={() => { setIsTab("category") }}>Category</button>
                            <button className={isTab === "language" ? "bg-black text-white px-5 py-2 font-bold" : " border border-[#ccc] px-5 py-2 "} onClick={() => { setIsTab("language") }}>Language</button>
                            <button className={isTab === "programming" ? "bg-black text-white px-5 py-2 font-bold" : " border border-[#ccc] px-5 py-2 "} onClick={() => { setIsTab("programming") }}>Programming Language</button>
                        </div>
                        <div className="p-5 content-center">
                            {isTab === "language" && <Language />}
                            {isTab === "category" && <Category />}
                            {isTab === "programming" && <ProgrammingLan />}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default OtherSection