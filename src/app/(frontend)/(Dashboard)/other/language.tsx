import LanguageModal from "@/components/modal/languageModal"
import { useState } from "react"

function Language() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center justify-between">
            <div>
                <ul>
                    <li>Language 1</li>
                    <li>Language 2</li>
                    <li>Language 3</li>
                    <li>Language 4</li>
                </ul>
            </div>
            <LanguageModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <button onClick={() => { setIsOpen(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
        </div>
    )
}

export default Language