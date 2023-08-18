import { Fragment } from "react";
import ReactModal from "react-modal";

function LanguageModal({ isOpen }: { isOpen: any }) {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("<<<>>>");

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
                    <div className="inner_container">
                        <div className="w-full mb-6 md:mb-0 ">
                           
                                <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                    Language
                                </label>
                                <input
                                    type="text"
                                    // value={field.value}
                                    // onChange={(e) => handleInputChange(index, 'language', e.target.value)}
                                    className={`appearance-none w-full block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    // id={`language_${field.id}`}
                                    // name={`language_${field.id}`}
                                />
                                <label className="block uppercase tracking-wide font-semibold text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                    Value
                                </label>
                                <input
                                    type="text"
                                    // onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="progress"
                                    name="progress"
                                />
                            
                        </div>
                        <div>
                            <div className="text-center ">
                                <button type="button" className="bg-black mt-4 hover:bg-gray-600-700 text-white mb-5 content-center w-20 m-auto font-bold py-2 px-4 border border-white-700 rounded">+</button>
                            </div>
                            <div>
                                <button type='submit' className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </ReactModal>
        </Fragment>
    )
}

export default LanguageModal