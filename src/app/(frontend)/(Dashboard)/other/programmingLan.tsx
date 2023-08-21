import ProgrammingModal from "@/components/modal/programmingModal"
import { useState } from "react"

function ProgrammingLan() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center justify-between">
            <div className="flex">
                <ul>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                </ul>
            </div>
            <ProgrammingModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <button type="button" onClick={() => { setIsOpen(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
        </div>
    )
}
export default ProgrammingLan