import Project from "../Projects/Project"
import { useNavigate } from "react-router-dom"

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.service = []

        fetch(`http://localhost:5000/project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })

            .then((resp) => resp.json())
            .then((data) => {
                navigate("/Projetos", { state: { message: "criado com sucesso" } })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Façã seu agendamento dos aperitivos</h1>
            <Project handleSubmit={createPost} btnText="Enviar" />
        </div>
    )
}

export default NewProject