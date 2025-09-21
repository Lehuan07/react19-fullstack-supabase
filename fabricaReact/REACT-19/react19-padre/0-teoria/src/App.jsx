import "./index.css"
import {HolaMundo} from "../src/components/HolaMundo"
import{Contador} from "../src/components/Contador"
import { CardProducto } from "./components/CardProducto"

const frutas =["Manzana", "Banana", "Pera"]
const productos =[
  {nombre : "Laptop", precio: 1200, destacado: true},
  {nombre : "mouse", precio: 5, destacado: false},
{nombre : "Teclado", precio: 10, destacado: false},
]

function App(){
  return(
    <div className="bg-black h-screen text-amber-100">
      <HolaMundo></HolaMundo>
      <Contador></Contador>
      {
        frutas.map((item, index) =>{
          const esUna = "es una fruta"
          return (
            <div key={index} className="">
            {item} {esUna}
            </div>
          )
        })
      }

      <span>Productos</span>

      <section className="gap-4 flex flex-row w-2.5">
        {productos.map((item,index) =>{
          return(
          <CardProducto key={index} item={item}></CardProducto>
        )
      })}
      </section>
    </div>
    
  )
}

export default App
