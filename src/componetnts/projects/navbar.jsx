import MyContext from "@/context";
import { useContext, useState } from "react";

function Navbar() {
    const {setProjectLink} = useContext(MyContext)

    const [arr, setArr] = useState([
        { id: 0, link : "voip" , active: true, text: "پروژه ویپ"},
        { id: 1, link : "radio" , active: false, text: "اینترنت رادیویی"},
        { id: 2, link : "rack" , active: false, text: "آرایش رک"},
        { id: 3, link : "infrastructure" , active: false, text: "زیر ساخت"},
    ])

    const handleChangePorjectTopic = (index , item) => {
        const updatedArr = arr.map((item, i) => ({ ...item, active: item.id === index ? true : false }));
        setArr(updatedArr);
        setProjectLink(item.link)
    }

    return (
        <div className="project-navbar flex justify-center">
            <div className=" w-full h-full max-w-[1000px] flex gap-3 justify-center flex-wrap">
                <ul className=" flex p-3 gap-3 border border-gray-300 rounded-md bg-white mx-3">
                    {
                        arr.map((item, i) => {
                            return (
                                <li key={i} onClick={() => handleChangePorjectTopic(i , item)} className={`${item.active ? "bg-red-500 text-white" : "bg-white"} cursor-pointer text-sm  p-2 text-center rounded-md`}>
                                    {item.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;