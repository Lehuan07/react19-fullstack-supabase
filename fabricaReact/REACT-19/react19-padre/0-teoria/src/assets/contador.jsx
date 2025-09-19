import { useState } from "react"
import styles from "./Contador.Module.css"


export const Contador = () =>{
    const[state, setState] = useState(false)

    return(
        <div className={styles.card}>
            <h1>Contador</h1>
        </div>
    )
}