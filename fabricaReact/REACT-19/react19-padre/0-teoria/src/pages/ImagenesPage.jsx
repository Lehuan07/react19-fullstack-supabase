import { BtnVolver } from "../components/ui/buttons/BtnVolver"
import ImagenLocal from "../assets/RuneQuestWarlords2.jpg"

export const ImagenesPage = () =>{
    return(
        <div className="max-w-3xl mx-auto p-6 space-y-10">
            <BtnVolver />
            <h1 className="text-3xl font-bold text-center">Imagenes con react</h1>
            
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagenes locales importadas</h2>
                <img src={ImagenLocal} alt="RuneQuest" />
            </section>
            
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagen desde una url externa</h2>
                <img src="https://cdn.pixabay.com/photo/2025/07/12/10/04/reinebringen-9710168_640.jpg" alt="Paisaje" />
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagen como fondo</h2>
                <div
                    className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://wallpapers.com/images/featured/impresionante-lmgj3sb4v9touzk8.jpg')",
                    }}
                >
                    <span className="text-2xl font-bold bg-black/50 p-2 rounded">
                        Fondo con texto encima
                    </span>
                </div>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagen Lazy, tipo perezoso</h2>
                <img src="https://cdn.pixabay.com/photo/2025/07/12/10/04/reinebringen-9710168_640.jpg" alt="Paisaje" loading="lazy"/>
            </section>
        </div>   
    )
}
