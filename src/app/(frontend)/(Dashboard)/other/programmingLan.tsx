import ProgrammingModal from "@/components/modal/programmingModal"
import axios from "axios"
import { useEffect, useState } from "react"

function ProgrammingLan() {
    const [isOpen, setIsOpen] = useState(false)
    const [isProgramming, setIsProgramming] = useState([])

    useEffect(() => {
        programmingList()
    }, [isOpen])

    const programmingList = async () => {
        let res = await axios.get("/api/v1/user/getProgrammingLanguage")
        setIsProgramming(res?.data?.programmingLanList)
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex">
                <ul>
                    {isProgramming?.map((list: any) => {
                        return (
                            <li>{list?.name} = {list.progress}%</li>
                        )
                    })
                    }
                </ul>
            </div>
            <ProgrammingModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <button type="button" onClick={() => { setIsOpen(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
        </div >
    )
}
export default ProgrammingLan