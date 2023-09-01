import { SetStateAction, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, useState } from "react";

const SkillList = () => {
    const [inputValue, setInputValue] = useState('');
    const [valueArrays, setValueArrays] = useState<any>({});

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            const value = inputValue.trim().toLowerCase();
            setInputValue('');

            if (!valueArrays[value]) {
                valueArrays[value] = [];
            }

            valueArrays[value].push(value);
            setValueArrays({ ...valueArrays });
        }
    };

    const removeFromArray = (arrayName: string, value: any) => {
        const index = valueArrays[arrayName].indexOf(value);
        if (index !== -1) {
            valueArrays[arrayName].splice(index, 1);
            setValueArrays({ ...valueArrays });
        }
    };
    return (
        <div>
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h3 className="dark:text-white underline text-center">Add Skills</h3>
            </div>
            <div className="flex px-0 pt-0 pb-2 justify-center w-full">
                <div className="p-0 overflow-x-auto">
                    <div className="w-full max-w-lg">
                        <div>
                            <input
                                type="text"
                                className="border mt-5"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyPress={handleInputKeyPress}
                                placeholder="Enter values and press Enter"
                            />
                            <div>
                                {Object.keys(valueArrays).map((arrayName) => (
                                    <ul key={arrayName}>
                                        {valueArrays[arrayName].map((value: any) => (
                                            <li
                                                key={value}
                                                onClick={() => removeFromArray(arrayName, value)}
                                                className="valueItem"
                                            >
                                                {value}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillList;