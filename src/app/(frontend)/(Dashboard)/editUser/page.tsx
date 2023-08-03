"use client";

import { ProgressDefault } from "@/components/progressBar/page";
import axios from "axios";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

const EditProfile = () => {
    const searchParams = useSearchParams()
    const [userData, setUserData] = useState<any>()
    const [isUser, setIsUser] = useState({
        title: userData?.title,
        email: userData?.email,
        name: userData?.name,
        menu: userData?.menu,
        description: userData?.description,
        shortDescription: userData?.shortDescription,
        designation: userData?.designation
    })
    const [isDesignation, setIsDesignation] = useState("")
    const [id, setId] = useState({
        id: searchParams.get('_id')
    })

    useEffect(() => {
        userList()
    }, [])

    const userList = async () => {
        try {
            const res = await axios.post("/api/v1/user/getUser", id)
            console.log(res, "res");
            if (res?.data?.code == 200) {
                setUserData(res?.data?.data)
            }
        }
        catch (err: any) {
            console.log(err.message, "error");
        }
    }

    const handleChange = (e: any) => {
        setIsDesignation(e.target.value)
    }

    const handleSubmit=()=>{
        
    }

    return (
        <>
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                <div className="w-full px-6 py-6 mx-auto">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-none w-full max-w-full px-3">
                            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                    <h3 className="dark:text-white underline text-center">User Detail</h3>
                                </div>
                                <div className="flex px-0 pt-0 pb-2 justify-center w-full">
                                    <div className="p-0 overflow-x-auto">
                                        <ProgressDefault />
                                        <form onSubmit={handleSubmit} className="w-full max-w-lg">
                                            <div className="w-full mx-1 px-3 mb-6 md:mb-0 mt-5">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Title
                                                </label>
                                                <input onChange={(e) => setIsUser({ ...isUser, title: e.target.value })} value={userData?.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                            </div>
                                            <div className="flex flex-wrap mb-6">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                        Email Address
                                                    </label>
                                                    <input onChange={(e) => setIsUser({ ...isUser, email: e.target.value })} value={userData?.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        Full Name
                                                    </label>
                                                    <input onChange={(e) => setIsUser({ ...isUser, name: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full mx-3 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                                                        description
                                                    </label>
                                                    <textarea onChange={(e) => setIsUser({ ...isUser, description: e.target.value })} value={userData?.description} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" placeholder="description" />
                                                    {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                                                </div>
                                            </div>
                                            <div className="w-full mx-1 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Short Description
                                                </label>
                                                <input onChange={(e) => setIsUser({ ...isUser, shortDescription: e.target.value })} value={userData?.shortDescription} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Short Description" />
                                            </div>
                                            <div className="w-full mx-3 mt-8 mb-6 md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Designation
                                                </label>
                                                <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
                                                    <select onChange={(e) => setIsUser({ ...isUser, designation: e.target.value })} className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                                                        <option value={userData?.designation}>{userData?.designation}&hellip;</option>
                                                        <option value="Self employed">Self employed</option>
                                                        <option value="Freelancer">Freelancer</option>
                                                        <option value="Entrepreneur">Entrepreneur</option>
                                                        <option value="Sole proprietor">Sole proprietor</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="w-full mt-8 mb-6 md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        Menu
                                                    </label>
                                                    <div className="inline-flex">
                                                        <div className="flex items-center">
                                                            <input type="radio" id="true" value="true" name="gender" />
                                                            <label className="cursor-pointer ml-3 text-black" htmlFor="true">True</label>
                                                        </div>
                                                        <div className="flex items-center ml-5">
                                                            <input type="radio" id="false" value="false" name="gender" />
                                                            <label className="cursor-pointer ml-3 text-black" htmlFor="false">False</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="items-center ml-7 mb-3">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default EditProfile