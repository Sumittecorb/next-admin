import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ProgressDefault } from "@/components/progressBar/page";
import EducationalDetail from "@/components/personalDetail/educationalDetail/page";
import EmploymentHistory from "@/components/personalDetail/employmentHistory/page";

function PersonalDetail() {
    type ProfileValue = {
        title: string;
        email: string;
        name: string;
        description: string;
        startDate: any
        endDate: any
    };

    const { register, control, handleSubmit, formState: { errors } } = useForm<ProfileValue>();
    const [employmentHistory, setEmploymentHistory] = useState<ProfileValue[]>([
        {
            title: "",
            email: "",
            name: "",
            description: "",
            startDate: "",
            endDate: ""
        }
    ]);

    const today = new Date();
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState("")
    const [isNext, setIsNext] = useState(false)


    const addEmployment = () => {
        setEmploymentHistory([...employmentHistory, {
            title: "",
            email: "",
            name: "",
            description: "",
            startDate: "",
            endDate: ""
        }]);
    }

    const onsubmit = (data: ProfileValue) => {
        console.log(errors, "errors");

        console.log(data);
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
                        {!isNext ?
                            <EmploymentHistory setIsNext={setIsNext} /> :
                            <EducationalDetail />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PersonalDetail
