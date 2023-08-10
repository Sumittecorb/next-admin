import { useState } from "react"

function Lanaguage() {

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

    return (
        <div>
            <h3>Add Language</h3>
            <div className="w-full mt-8">
                {inputField?.map((field, index) => (
                    <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className="h-12">
                            <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                Language
                            </label>
                            <input
                                type="text"
                                value={field.value}
                                className={`appearance-none w-full block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id={`language_${field.id}`}
                                name={`language_${field.id}`}
                            />
                        </div>
                        <div className="h-12">
                            <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                Value
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
            </div>

            <div className="text-center mt-5">
                <button type="button" onClick={handleAdd} className="bg-black mt-8 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
            </div>
        </div>
    )
}

export default Lanaguage