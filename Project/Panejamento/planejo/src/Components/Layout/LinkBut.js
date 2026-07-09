import { Link } from "react-router-dom"

function LinkBut({ to, text }) {
    return (
        <div>
            <Link to={to}>{text}</Link>
        </div>
    )
}

export default LinkBut