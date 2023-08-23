import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import ClickAwayListener from "react-click-away-listener";
import ReactModal from "react-modal";

function LanguageModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
    const [languageFields, setLanguageFields] = useState([{ language: "", value: "" }]);

    const handleAddClick = () => {
        const lastLanguageField = languageFields[languageFields.length - 1];
        if (lastLanguageField.language.trim() !== "" && lastLanguageField.value.trim() !== "") {
            const newFields = [...languageFields, { language: "", value: "" }];
            setLanguageFields(newFields);
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const inputFieldValues = languageFields.map(field => ({
            name: field.language,
            value: field.value
        }));

        const keyData = {
            language: inputFieldValues
        }
        let res = await axios.post("/api/v1/user/addLanguage", keyData)
        console.log(res, "res");
    }

    return (
        <Fragment>
            <ReactModal
                className="resetModal"
                isOpen={isOpen}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
            >
                <form onSubmit={handleSubmit}>
                    <ClickAwayListener onClickAway={() => { setIsOpen(false) }} >
                        <div className="inner_container">
                            {languageFields.map((field, index) => (
                                <div className="w-full mb-6 md:mb-0" key={index}>
                                    <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor={`language-${index}`}>
                                        Language
                                    </label>
                                    <input
                                        type="text"
                                        value={field.language}
                                        onChange={(e) => {
                                            const newFields = [...languageFields];
                                            newFields[index].language = e.target.value;
                                            setLanguageFields(newFields);
                                        }}
                                        className={`appearance-none w-full block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                        id={`language-${index}`}
                                    />
                                    <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor={`value-${index}`}>
                                        Value
                                    </label>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(e) => {
                                            const newFields = [...languageFields];
                                            newFields[index].value = e.target.value;
                                            setLanguageFields(newFields);
                                        }}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                        id={`value-${index}`}
                                        name={`value-${index}`}
                                    />
                                </div>
                            ))}
                            <div className="text-center ">
                                <button
                                    type="button"
                                    onClick={handleAddClick}
                                    // disabled={isAddButtonDisabled}
                                    className="bg-black mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div>
                                <button type='submit' className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Submit</button>
                            </div>
                        </div>
                    </ClickAwayListener>
                </form>
            </ReactModal>
        </Fragment >
    )
}

export default LanguageModal;
