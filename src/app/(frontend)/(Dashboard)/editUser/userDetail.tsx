import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UserDetail = ({
    handleSubmit,
    handleNext,
    handleChange,
    onsubmit,
    userData,
    isErr,
    menuSelection,
    setMenuSelection }:
    {
        handleSubmit: any
        handleNext: any
        handleChange: any
        onsubmit: any,
        userData: any,
        isErr: boolean,
        menuSelection: boolean,
        setMenuSelection: any
    }) => {

    type ProfileValue = {
        title: string,
        email: string,
        name: string,
        menu: boolean,
        description: string,
        shortDescription: string,
        designation: string,

    }

    const router = useRouter()
    const { register, formState: { errors } } = useForm<ProfileValue>();

    return (
        <>
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">User Detail</h3>
            </div>
            <div className="flex px-0 pt-0 pb-2 justify-center w-full">
                <div className="p-0 overflow-x-auto">
                    <div className="w-full max-w-lg">
                        <form onSubmit={handleSubmit(onsubmit)} >
                            <div className="w-full mx-1 px-3 mb-6 md:mb-0 mt-5">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    {...register("title", { required: true })}
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.title && "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Email Address
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
                                        Full Name
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
                                        placeholder="description" />
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
                                <div className={`relative border ${isErr && "border-red-500"} border-gray-300 text-gray-800 bg-white shadow-lg`}>
                                    <select onChange={(e) => handleChange(e)} className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
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
                                    <div className="flex items-center">
                                        <p className="mr-3 block uppercase tracking-wide text-gray-700 text-xs font-bold" >
                                            Menu
                                        </p>
                                        <p className="text-red-700 font-bold text-sm min-w-48">{errors.menu?.message}</p>
                                    </div>
                                    <div className="inline-flex">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                {...register("menu", { required: true })}
                                                id="true"
                                                name="menu"
                                                value="true"
                                                onChange={() => { setMenuSelection(true) }}
                                                checked={menuSelection === true}
                                            />
                                            <label className="cursor-pointer ml-3 text-black" htmlFor="true">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center ml-5">
                                            <input
                                                type="radio"
                                                {...register("menu", { required: "Required field" })}
                                                id="false"
                                                name="menu"
                                                value="false"
                                                onChange={() => { setMenuSelection(false) }}
                                                checked={menuSelection === false}
                                            />
                                            <label className="cursor-pointer ml-3 text-black" htmlFor="false">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between ml-7 mb-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                                <button type="button" disabled={!menuSelection} onClick={handleNext} className={`bg-black ${!menuSelection && "bg-gray-DEFAULT-500"} text-white font-bold py-2 px-4 rounded`}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail