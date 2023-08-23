import { ProgressDefault } from "@/components/progressBar/page"
import { useState } from "react";
import { useForm } from "react-hook-form";

const PersonalDetail = () => {
    type ProfileValue = {
        title: string,
        email: string,
        name: string,
        menu: boolean,
        description: string,
        shortDescription: string,
        designation: string
    }
    const { setValue, register, handleSubmit, formState: { errors } } = useForm<ProfileValue>();
    const [isErr, setIsErr] = useState(false)

    const onsubmit = () => {

    }

    return (
        <div>
            <ProgressDefault value={4} />
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">Personal Detail</h3>
            </div>
            <div className="flex px-0 pt-0 pb-2 justify-center w-full">
                <div className="p-0 overflow-x-auto">
                    <div className="w-full max-w-lg">
                        <form onSubmit={handleSubmit(onsubmit)} >

                            <div className="flex flex-wrap mb-6 mt-5">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        {...register("email", { required: true })}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Employer
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.name && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                        id="name"
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full mx-3 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                                        description
                                    </label>
                                    <textarea
                                        {...register("description", { required: true })}
                                        name="description"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.description && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                        id="description"
                                        placeholder="description"
                                    />
                                </div>
                            </div>
                            <div className="w-full mx-1 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Short Description
                                </label>
                                <input
                                    type="text"
                                    {...register("shortDescription", { required: true })}
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.shortDescription && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="shortDescription"
                                    name="shortDescription"
                                />
                            </div>
                            <div className="w-full mx-3 mt-8 mb-6 md:w-1/2 px-3">
                                <label className={`block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2`}
                                    htmlFor="grid-last-name">
                                    Designation
                                </label>
                                <div className="w-full mt-8 mb-6 md:w-1/2 px-3">
                                    <div className="flex items-center">
                                        <p className="mr-3 block uppercase tracking-wide text-gray-700 text-xs font-bold" >
                                            Menu
                                        </p>
                                        <p className="text-red-700 font-bold text-sm min-w-48">{errors.menu?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between ml-7 mb-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                                <button type="button" className={`bg-black ${"bg-gray-DEFAULT-500"} text-white font-bold py-2 px-4 rounded`}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalDetail