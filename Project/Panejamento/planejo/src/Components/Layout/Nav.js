import style from "./Nav.module.css"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className={style.nav}>
            <h1>PLANEJEMENT</h1>
            <ul className={style.list}>
                <li><Link>Planejamento</Link></li>
                <li><Link>Home</Link></li>
            </ul>
        </div >
    )
}

export default Nav
