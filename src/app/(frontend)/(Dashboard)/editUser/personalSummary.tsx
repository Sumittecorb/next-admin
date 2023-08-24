import { ProgressDefault } from "@/components/progressBar/page"
import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PersonalDetail() {
    type ProfileValue = {
        title: string;
        email: string;
        name: string;
        description: string;
    };
    const { setValue, register, handleSubmit, formState: { errors } } = useForm<ProfileValue>();
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState("")
    const today = new Date()

    const [employmentHistory, setEmploymentHistory] = useState<ProfileValue[]>([]);

    const addEmployment = () => {
        setEmploymentHistory([...employmentHistory, {
            title: "",
            email: "",
            name: "",
            description: "",
        }]);
    }

    const onsubmit = () => {
    };

    const startChangeDate = (date: any) => {
        setDate(moment(date).format('MMM YYYY'))
    }

    const startEndDate = (date: any) => {
        console.log(date);
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
                        <div className="mt-10 ">
                            <h5 className="text-blue-DEFAULT-950 underline font-bold">Employment History</h5>
                        </div>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div>
                                <div className="font-extrabold text-center ">
                                    <button type="button" onClick={() => { setIsOpen(!isOpen) }}>+</button>
                                </div>
                                {isOpen &&
                                    <div>
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
                                                    name="email" />
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
                                                    name="name" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Start date
                                                </label>
                                                <div>
                                                    <DatePicker
                                                        autoComplete='off'
                                                        showMonthYearPicker
                                                        maxDate={today}
                                                        onChange={startChangeDate}
                                                        value={date}
                                                        placeholderText="MM/YYYY"
                                                        showTimeInput={false}
                                                        className="focus-visible:outline-none w-full bg-gray-200 text-gray-700 border py-3 px-4  "
                                                        name="dob"
                                                        onKeyDown={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    End date
                                                </label>
                                                <div>
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
                                                        onKeyDown={(e) => {
                                                            e.preventDefault();
                                                        }}
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
                                        <div className="text-center">
                                            <button type="button"
                                                onClick={addEmployment}
                                                className="bg-slate-600 mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-200 m-auto font-bold py-2 px-4 border border-white-700 rounded">+ Add one more employment
                                            </button>
                                        </div>
                                        <div className="mt-10 flex items-center justify-between ml-7 mb-3">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PersonalDetail
