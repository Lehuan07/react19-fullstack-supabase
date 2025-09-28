import { CardList } from "../components/CardList"

export const Home = () =>{
    //Esto es un comentario

    return(
        <main className="flex min-h-screen flex-col item-center justify-center p-4 bg-black text-white">
            <div className= "mx-auto w-full max-w-3xl">
                {/*Hola, esto es un comentario*/}
                <h1 className="text-3xl font-bold text-center mb-8">
                    React 19 - Teoria
                </h1>
                <CardList></CardList>
            </div>
            </main>
    )
}