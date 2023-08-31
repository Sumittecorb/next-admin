import axios from "axios";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

const EducationalDetail = ({ setIsNext, isId }: { setIsNext: any, isId: any }) => {

    type ProfileValue = {
        id: number
        school: string
        degree: string
        description: string;
        startDate: any
        endDate: any
    };

    const today = new Date();
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const { register, control, handleSubmit, getValues, formState: { errors } } = useForm<ProfileValue>();
    const [employmentHistory, setEmploymentHistory] = useState<ProfileValue[]>([
        {
            id: 0,
            school: "",
            degree: "",
            description: "",
            startDate: "",
            endDate: ""
        }
        // {
        //     id: 0,
        //     title: "",
        //     employer: "",
        //     description: "",
        //     startDate: "",
        //     endDate: "",
        // },
    ]);

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
            educationalDetail: [
                data.employment
            ]
        }

        let res = await axios.put("/api/v1/user/updateUser", reqBody)
        if (res?.status == 200) {
            setIsNext(true)
        }
    }
    const addEducation = () => {
        const newId = employmentHistory.length;
        const currentValues = getValues();
        const isCurrentEntryEmpty = (
            currentValues.school === "" ||
            currentValues.degree === "" ||
            currentValues.description === "" ||
            currentValues.startDate === undefined ||
            currentValues.endDate === undefined
        );

        // if (isCurrentEntryEmpty) {
        //     return;
        // }

        setEmploymentHistory([...employmentHistory, {
            id: newId,
            school: "",
            degree: "",
            description: "",
            startDate: "",
            endDate: ""
        }]);
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div className="w-full max-w-lg">
                <div className="mt-10 ">
                    <h5 className="text-blue-DEFAULT-950 underline font-bold">Education History</h5>
                </div>
                <div>
                    {employmentHistory.map((employment, index) => (
                        <div key={index}>
                            <div className="border-4 mt-2">
                                <div className="flex flex-wrap mb-6 mt-5">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            School
                                        </label>
                                        <input
                                            type="text"
                                            autoComplete='off'
                                            {...register(`employment[${employment.id}].school`, { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.school && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="school"
                                            name={`employment[${employment.id}].school`}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Degree
                                        </label>
                                        <input
                                            type="text"
                                            autoComplete='off'
                                            {...register(`employment[${employment.id}].degree`, { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.degree && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="degree"
                                            name={`employment[${employment.id}].degree`}
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
                                                        className={`focus-visible:outline-none ${errors.startDate && "border-red-500"} w-full bg-gray-200 text-gray-700 border py-3 px-4`}
                                                        name="dob"
                                                        onKeyDown={(e) => {
                                                            e.preventDefault()
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
                                                        className={`focus-visible:outline-none w-full ${errors.endDate && "border-red-500"} bg-gray-200 text-gray-700 border py-3 px-4`}
                                                        name="endDate"
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
                        <button onClick={addEducation} type="button"
                            className="bg-slate-600 mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-200 m-auto font-bold py-2 px-4 border border-white-700 rounded">+ Add one more education
                        </button>
                    </div>
                    <div className=" flex items-center justify-between ml-7 mb-3">
                        <button onClick={() => { setIsNext(false) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back
                        </button>
                        <button type="submit" className={`bg-black text-white font-bold py-2 px-4 rounded`}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EducationalDetail
