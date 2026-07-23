import { useEffect, useState } from "react"
import style from "./Mensagem.module.css"

function Mensagem({ type, msg }) {
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisibility(false)
            return
        }

        setVisibility(true)

        const time = setTimeout(() => {
            setVisibility(false)
        }, 3000);
        return () => clearTimeout(time)
    }, [msg])

    return (
        <>
            {visibility && (
                <div className={`${style.Mensagem}${style[type]}`}>
                    <h2>{msg}</h2>
                </div>)
            }
        </>
    )
}
export default Mensagem