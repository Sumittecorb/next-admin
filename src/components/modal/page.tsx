import React, { Fragment, useState } from 'react';
import ReactModal from "react-modal";
import ClickAwayListener from 'react-click-away-listener';

const Modal = ({ isOpen, setIsOpen }: { isOpen: any, setIsOpen: any }) => {

    const [inputFields, setInputFields] = useState([{
        id: 0,
        value: ""
    }])
    const handleInputChange = (index: number, value: string) => {
        setInputFields(prevInputFields => {
            const newInputFields = [...prevInputFields];
            newInputFields[index].value = value;
            return newInputFields;
        })
    }

    const handleAdd = () => {
        const lastInputField = inputFields[inputFields.length - 1];
        if (lastInputField.value === "") {
            return
        }
        setInputFields(prevInputFields => [...prevInputFields, { id: prevInputFields.length, value: "" }]);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const allValues = inputFields.map(field => field.value);
        console.log(allValues, "allValues");
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
                            <div className="w-full mb-6 md:mb-0 ">
                                <label className="block uppercase tracking-wide font-bold text-gray-700 text-xs mb-7" htmlFor="grid-first-name">
                                    Add Category
                                </label>
                                {inputFields?.map((field, index) => (
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="email"
                                        name="email"
                                    />
                                ))}
                            </div>
                            <div>
                                <div className="text-center ">
                                    <button type="button" onClick={handleAdd} className="bg-black mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
                                </div>
                                <div>
                                    <button type='submit' className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </ClickAwayListener>
                </form>
            </ReactModal>
        </Fragment>
    );
};

export default Modal;
