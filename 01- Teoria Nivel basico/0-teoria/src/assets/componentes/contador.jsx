import { useState } from "react"
import { Modal } from "./modal"
import styles from "./contador.module.css"

export const Contador = () =>{
    const [state,setState] = useState(false)
    return (<div className= {styles.card}>
        <h1 className="contador">
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