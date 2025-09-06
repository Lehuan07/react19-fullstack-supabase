import { useState } from "react"
import { Modal } from "./modal"

export const Contador = () =>{
    const [state,setState] = useState(false)
    return (<div>
        <h1>
            Contador
        </h1>
        <button onClick={() =>
            setState(!state)}>
                {state? "Ocultar":"Ver"}
                </button>
        
        {
            state && <Modal></Modal>
        }
        
    </div>)
}