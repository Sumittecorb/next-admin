"use client";

import { ProgressDefault } from "@/components/progressBar/page";
import Select from "react-select";

function AddCategory() {
    const colourOptions = [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" }
    ];
    return (
        <>
            <ProgressDefault value={3} />
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">Add category</h3>
            </div>
            <div className="container content-center mx-auto mt-20 mb-5">
                <Select
                    defaultValue={[colourOptions[1], colourOptions[4]]}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="lg:w-1/2 w-full"
                    classNamePrefix="select"
                />
            </div>
        </>
    )
}

export default AddCategory