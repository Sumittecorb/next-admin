import axios from "axios";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

const EmploymentHistory = ({ setIsNext, isId }: { setIsNext: any, isId: any }) => {
    type ProfileValue = {
        id: number
        title: string
        employer: string
        description: string
        startDate: string
        endDate: string
    }
    // const searchParams = useSearchParams();
    // const isId = searchParams.get('_id')
    const { register, control, handleSubmit, getValues, formState: { errors }, trigger } = useForm<ProfileValue>();
    const today = new Date();
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [employmentHistory, setEmploymentHistory] = useState<ProfileValue[]>([
        {
            id: 0,
            title: "",
            employer: "",
            description: "",
            startDate: "",
            endDate: "",
        },
    ]);


    const addEmployment = async () => {

        const newId = employmentHistory.length;
        const currentValues = getValues();
        const isCurrentEntryEmpty = (
            currentValues.title === "" ||
            currentValues.employer === "" ||
            currentValues.description === "" ||
            currentValues.startDate === undefined ||
            currentValues.endDate === undefined
        );

        // if (isCurrentEntryEmpty) {
        //     return;
        // }

        setEmploymentHistory([
            ...employmentHistory,
            {
                id: newId,
                title: "",
                employer: "",
                description: "",
                startDate: "",
                endDate: "",
            },
        ]);
    }

    const startChangeDate = (date: any) => {
        setStartDate(moment(date).format('MMM YYYY'))
    }

    const startEndDate = (date: any) => {
        setEndDate(moment(date).format('MMM YYYY'))
    }

    const onsubmit = async (data: any) => {
        console.log(data.employment);
        let reqBody = {
            id: isId,
            employeeDetails: [
                data.employment
            ]
        }

        let res = await axios.put("/api/v1/user/updateUser", reqBody)
        if (res?.status == 200) {
            setIsNext(true)
        }
    }

    return (
        <div className="w-full max-w-lg">
            <div className="mt-10 ">
                <h5 className="text-blue-DEFAULT-950 underline font-bold">Employment History</h5>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    {employmentHistory.map((employment, index) => (
                        <div key={index}>
                            <div className="border-4 mt-5">
                                <div className="flex flex-wrap mb-6 mt-5">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            autoComplete='off'
                                            {...register(`employment[${employment.id}].title`, { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.title && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="title"
                                            name={`employment[${employment.id}].title`}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Employer
                                        </label>
                                        <input
                                            autoComplete='off'
                                            type="text"
                                            {...register(`employment[${employment.id}].employer`, { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.employer && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="employer"
                                            name={`employment[${employment.id}].employer`}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Start date
                                        </label>
                                        <div>
                                            <Controller
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        autoComplete='off'
                                                        showMonthYearPicker
                                                        maxDate={today}
                                                        onChange={(date: any) => {
                                                            startChangeDate(date);
                                                            field.onChange(date);
                                                        }}
                                                        selected={employment.startDate !== "" ? new Date(employment.startDate) : null}
                                                        value={startDate}
                                                        placeholderText="MM/YYYY"
                                                        showTimeInput={false}
                                                        className="focus-visible:outline-none w-full bg-gray-200 text-gray-700 border py-3 px-4  "
                                                        name={`startDate_${index}`}
                                                        onKeyDown={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    />
                                                )}
                                                {...register(`employment[${employment.id}].startDate`, {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            End date
                                        </label>
                                        <div>
                                            <Controller
                                                control={control}
                                                // name='endDate'
                                                render={({ field }) => (
                                                    <DatePicker
                                                        showMonthYearPicker
                                                        autoComplete='off'
                                                        maxDate={today}
                                                        onChange={(date: any) => {
                                                            startEndDate(date);
                                                            field.onChange(date);
                                                        }}
                                                        selected={employment.endDate !== "" ? new Date(employment.endDate) : null}
                                                        value={endDate}
                                                        placeholderText="MM/YYYY"
                                                        showTimeInput={false}
                                                        className="focus-visible:outline-none w-full bg-gray-200 text-gray-700 border py-3 px-4  "
                                                        name={`endDate_${index}`}
                                                        onKeyDown={(e: any) => {
                                                            e.preventDefault();
                                                        }}
                                                    />
                                                )}
                                                {...register(`employment[${employment.id}].endDate`, {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full mx-3 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                                            description
                                        </label>
                                        <textarea
                                            {...register(`employment[${employment.id}].description`, { required: true })}
                                            name={`employment[${employment.id}].description`}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.description && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="description"
                                            placeholder="description"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button onClick={addEmployment}
                            type="button"
                            className="bg-slate-600 mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-200 m-auto font-bold py-2 px-4 border border-white-700 rounded">+ Add one more employment
                        </button>
                    </div>
                    <div className=" flex items-center justify-between ml-7 mb-3">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back
                        </button>
                        <button type="submit" className={`bg-black text-white font-bold py-2 px-4 rounded`}>
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default EmploymentHistory
