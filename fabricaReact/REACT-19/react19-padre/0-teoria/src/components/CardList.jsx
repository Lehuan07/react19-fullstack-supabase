import {Icon} from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

export const CardList = () =>{
    const temasTeoria = [
        {
        title: "useEfect",
        to:"/UseEfectsPage"
        },
        {
        title: "imagenes",
        to:"/imagenes"
        },
    ]
    return(
        <div className="flex flex-col gap-4">
            {
                temasTeoria.map((item, index)=>(
                    <Link to={item.to} className="group w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer transition-all duration-300 ease-in-out" key={index}>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <Icon icon="weui:arrow-filled" width="12" height="24" className="group-hover:text-[#e776f3] cursor-pointer transition-all duration-300 ease-in-out"/>
                    </Link>
                ))}
        </div>
    )
}