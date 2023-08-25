import Modal from "@/components/modal/categoryModal"
import axios from "axios"
import { useEffect, useState } from "react"

function Category() {
    const [isOpen, setIsOpen] = useState(false)
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategory()
    }, [isOpen])

    const getCategory = async () => {
        let res = await axios.get("/api/v1/user/getCategory")
        if (res?.status == 200) {
            setCategoryList(res?.data?.categoryList)
        }
    }

    return (
        <div className="flex items-center justify-between">
            <div>
                <ul>
                    {categoryList?.map((list: any) => {
                        return <li>{list.name}</li>
                    })}
                </ul>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <button onClick={() => { setIsOpen(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
        </div>
    )
}
export default Category