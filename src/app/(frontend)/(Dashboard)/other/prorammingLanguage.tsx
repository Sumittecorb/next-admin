import { useState } from "react"
import Lanaguage from "./language"

function ProgrammingLanguage() {

    const [inputField, setInputField] = useState([{
        id: 0,
        value: ""
    }])

    const handleAdd = (e: any) => {
        e.preventDefault()
        const lengthValue = inputField.length
        const newInputField = [...inputField, { id: lengthValue, value: "" }]
        setInputField(newInputField)
    }

    // const handleAdd = (e: any) => {
    //     e.preventDefault()
    //     if (inputField[inputField.length - 1].value === "") {
    //     }

    //     const lengthValue = inputField.length
    //     const newInputField = [...inputField, { id: lengthValue, value: "" }]
    //     setInputField(newInputField)
    // }

    const handleInputChange = (index: number, event: any) => {
        const newValue = event.target.value;
        const newInputFields = [...inputField];
        newInputFields[index].value = newValue;
        setInputField(newInputFields);
    }

    return (
        <div>
            <h3>Add Programming Lanaguage</h3>
            <div className="w-full mt-10">
                {inputField?.map((field, index) => (
                    <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className="h-12">
                            <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                Language
                            </label>
                            <input
                                type="text"
                                value={field.value}
                                onChange={() => { handleInputChange(index, event) }}
                                className={`appearance-none w-full block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id={`language_${field.id}`}
                                name={`language_${field.id}`}
                            />
                        </div>
                        <div className="h-12">
                            <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                Progress
                            </label>
                            <input
                                type="text"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="progress"
                                name="progress"
                            />
                        </div>
                    </div>
                ))}
                <div className="text-center mt-5">
                    <button onClick={handleAdd} type="button" className="bg-black mt-8 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
                </div>
            </div>
            <div className="mt-10">
                <Lanaguage />
            </div>
        </div>
    )
}
export default ProgrammingLanguage