import Modal from "@/components/modal/page"
import { useState } from "react"

function Category() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center justify-between">
            <div>
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                </ul>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div>
                <button onClick={() => { setIsOpen(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>

        </div>

    )
}
export default Category