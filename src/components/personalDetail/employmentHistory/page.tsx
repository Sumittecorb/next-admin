import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

const EmploymentHistory = ({ setIsNext }: { setIsNext: any }) => {
    type ProfileValue = {
        title: string
        employer: string
        description: string
        startDate: string
        endDate: string
    }

    const { register, control, handleSubmit, formState: { errors } } = useForm<ProfileValue>();
    const today = new Date();
    const [date, setDate] = useState("")
    const [selectedDate, setSelectedDate] = useState<any>('')
    const [employmentHistory, setEmploymentHistory] = useState<ProfileValue[]>([
        {
            title: "",
            employer: "",
            description: "",
            startDate: "",
            endDate: ""
        }
    ]);

    const isEmploymentEntryEmpty = (employment: ProfileValue): boolean => {
        return (
            employment.title === "" &&
            employment.employer === "" &&
            employment.description === "" &&
            employment.startDate === "" &&
            employment.endDate === ""
        );
    };

    const addEmployment = () => {
        setEmploymentHistory([...employmentHistory, {
            title: "",
            employer: "",
            description: "",
            startDate: "",
            endDate: ""
        }]);
    }

    const startChangeDate = (date: any) => {
        setDate(moment(date).format('MMM YYYY'))
        setSelectedDate(date)
    }

    const startEndDate = (date: any) => {
        console.log(date);
    }

    const onsubmit = (data: any) => {


        console.log(data, "data");

    }
    console.log(errors);

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
                                            {...register("title", { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.title && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="title"
                                            name="title"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Employer
                                        </label>
                                        <input
                                            type="text"
                                            {...register("employer", { required: true })}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.employer && "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                            id="employer"
                                            name="employer"
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
                                                        onChange={startChangeDate}
                                                        value={date}
                                                        placeholderText="MM/YYYY"
                                                        showTimeInput={false}
                                                        className="focus-visible:outline-none w-full bg-gray-200 text-gray-700 border py-3 px-4  "
                                                        name="startDate"
                                                        selected={selectedDate}
                                                        onKeyDown={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    />
                                                )}
                                                {...register("startDate", {
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
                                                        onChange={startEndDate}
                                                        value={date}
                                                        placeholderText="MM/YYYY"
                                                        showTimeInput={false}
                                                        className="focus-visible:outline-none w-full bg-gray-200 text-gray-700 border py-3 px-4  "
                                                        name="dob"
                                                        onKeyDown={(e: any) => {
                                                            e.preventDefault();
                                                        }}
                                                    />
                                                )}
                                                {...register("endDate", {
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
                                            {...register("description", { required: true })}
                                            name="description"
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
                            disabled={isEmploymentEntryEmpty(employmentHistory[employmentHistory.length - 1])}
                            className="bg-slate-600 mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-200 m-auto font-bold py-2 px-4 border border-white-700 rounded">+ Add one more employment
                        </button>
                    </div>
                    <div className=" flex items-center justify-between ml-7 mb-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                        <button onClick={() => { setIsNext(true) }} type="button" className={`bg-black text-white font-bold py-2 px-4 rounded`}>
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default EmploymentHistory
