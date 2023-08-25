import React from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { ProgressDefault } from "@/components/progressBar/page";
import EmploymentHistory from "@/components/personalDetail/employmentHistory/page";
import EducationalDetail from "@/components/personalDetail/educationalDetail/page";

function PersonalDetail() {

    const { register, control, handleSubmit, formState: { errors } } = useForm<ProfileValue>();
    type ProfileValue = {
        title: string;
        email: string;
        name: string;
        description: string;
        startDate: any
        endDate: any
    };

    const onsubmit = (data: ProfileValue) => {
        console.log(errors, "errors");

        console.log(data);
    };

    return (
        <div>
            <ProgressDefault value={4} />
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">Personal Detail</h3>
            </div>
            <div className="flex px-0 pt-0 pb-2 justify-center w-full">
                <div className="p-0 overflow-x-auto">
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <EmploymentHistory />
                        <EducationalDetail />
                        <div className="mt-10 flex items-center justify-between ml-7 mb-3">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default PersonalDetail
