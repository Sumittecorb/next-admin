import { useState } from "react"
import Lanaguage from "./language"

function ProgrammingLanguage({ onLanguagesChange }: { onLanguagesChange: any }) {

    interface InputField {
        id: number;
        language: string;
        progress: string;
    }

    const [inputField, setInputField] = useState<InputField[]>([{ id: 1, language: '', progress: '' }]);

    const handleInputChange = (index: number, fieldName: 'language' | 'progress', value: string) => {
        const newInputFields = [...inputField];
        newInputFields[index][fieldName] = value;
        setInputField(newInputFields);
    };

    const handleAddField = () => {
        const lastField = inputField[inputField.length - 1];
        if (lastField.language !== '' && lastField.progress !== '') {
            setInputField([...inputField, { id: lastField.id + 1, language: '', progress: '' }]);
        }
        onLanguagesChange(inputField);
    };

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
                                // value={field.value}
                                onChange={(e) => handleInputChange(index, 'language', e.target.value)}
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
                                onChange={(e) => handleInputChange(index, 'progress', e.target.value)}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="progress"
                                name="progress"
                            />
                        </div>
                    </div>
                ))}
                <div className="text-center mt-5">
                    <button
                        type="button"
                        onClick={handleAddField}
                        className="bg-black mt-8 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">
                        +
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <Lanaguage onLanguagesChange={onLanguagesChange}/>
            </div>
        </div>
    )
}
export default ProgrammingLanguage