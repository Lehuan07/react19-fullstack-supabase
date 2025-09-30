import { NavLink, Outlet } from "react-router-dom"
import { BtnVolver } from "../components/ui/buttons/BtnVolver"


export const RutasAnidadasPage = () =>{
    return(
        <div className="p-6 max-w-2xl xm-autp space-y-6">
            <BtnVolver/>
            <h2 className="text-3xl font-bold text-center">Panel de usuario</h2>
            <nav className="flex gap-4 justify-center">
                <NavLink className={({isActive})=> isActive? 
                "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow"
                :
                "px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold shadow hover:bg-indigo-100"} to={"perfil"}>
                    Perfil
                </NavLink>
                <NavLink to={"Configuracion"} className={({isActive})=> isActive? 
                "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow"
                :
                "px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold shadow hover:bg-indigo-100"}>
                    Configuracion
                </NavLink>
            </nav>

            <section className="">
                <Outlet></Outlet>
            </section>
        </div>
    )
}