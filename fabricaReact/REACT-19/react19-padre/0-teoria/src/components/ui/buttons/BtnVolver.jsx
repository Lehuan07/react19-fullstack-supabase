import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export const BtnVolver = () =>{
    const navigate = useNavigate();
    return(
        <button onClick={()=>navigate(-1)} className="absolute top-4 left-4 bg-white text-black cursor-pointer hover:bg-[#ededed] p-3 rounded-full shadow-lg">
            <Icon icon="material-symbols:arrow-back-rounded" width="24" height="24" />
        </button>
    )
}