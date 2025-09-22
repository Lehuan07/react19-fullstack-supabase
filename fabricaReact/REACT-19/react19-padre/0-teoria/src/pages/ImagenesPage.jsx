import { BtnVolver } from "../components/ui/buttons/BtnVolver"
import ImagenLocal from "../assets/react.svg"

export const ImagenesPage = () =>{
    return(
        <div className="max-w-3xl mx-auto p-6 space-y-10">
            <BtnVolver></BtnVolver>
            <h1 className="text-3xl font-bold text-center">Imagenes con react</h1>
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagenes locales importadas</h2>
                <img src={ImagenLocal} alt="React" />
            </section>
        </div>
    )
}