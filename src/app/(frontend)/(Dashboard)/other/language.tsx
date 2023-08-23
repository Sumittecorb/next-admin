import LanguageModal from "@/components/modal/languageModal"
import axios from "axios"
import { useEffect, useState } from "react"

function Language() {
    const [isOpen, setIsOpen] = useState(false)

    const [isLanguage, setIsLanguage] = useState([])

    useEffect(() => {
        languageList()
    }, [])

    const languageList = async () => {
        let res = await axios.get("/api/v1/user/getLanguage")
        if (res?.status == 200) {
            setIsLanguage(res?.data?.languageList)
        }
    }
    return (
        <div className="flex items-center justify-between">
            <div>
                <ul>
                    {isLanguage?.map((list: any) => {
                        return (
                            <li>{list?.name} = {list?.value} %</li> 
                        )
                    })
                    }
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