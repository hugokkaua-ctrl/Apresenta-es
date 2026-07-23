import style from "./ProjectCard.module.css"
import { Link } from "react-router-dom"

function ProjectCard({ id, name, budget, category, handleDelet }) {
    const deletar = (e) => {
        e.preventdefault()
        handleDelet(id)
    }

    return (
        <div>
            <h1></h1>
            <div>
                <p></p>
                <p></p>
            </div>

            <Link to={`/Editar/${id}`}>Editar</Link>

            <button onClick={deletar}>Excluir</button>
        </div>
    )
}

export default ProjectCard