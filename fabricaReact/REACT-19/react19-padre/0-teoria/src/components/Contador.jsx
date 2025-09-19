import { useState } from "react"

import {Modal} from "./Modal"

export const Contador = () =>{
    const [state, setState] = useState(false)

    return(
        <div className="bg-amber-600 p-4 rounded-2xl">
            <h1 className="contador">Contador</h1>
            <button onClick={()=>setState(!state)}>
                {state ?`Ocultar` : `A ver`}
                </button>
            
            {
            state && <Modal></Modal>
            }
            
        </div>
    )
}