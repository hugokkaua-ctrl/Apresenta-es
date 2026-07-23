import Mensagem from "../Layout/Mensagem"
import ProjectCard from "../Projects/ProjectCard"
import Container from "../Layout/Container"
import Loading from "../Layout/Loading"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function Projetos() {
    const location = useLocation()
    const message = location.state?.message
    const [project, setProject] = useState([])
    const [deletLoading, setDeletLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/project`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setDeletLoading(true)
                })
                .catch((err) => console.log(err))
        }, 1000);
    }, [])

    function deletar(id) {
        fetch(`http://localhost:5000/project/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(project.filter((project) => project.id !== id))
                setProjectMessage("deletado")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div>
                <h1>Projetos Planejados</h1>
                <Link></Link>
            </div>

            {message && <Mensagem type="sucess" msg={message} />}
            {projectMessage && <Mensagem type="sucess" msg={projectMessage} />}

            <Container >
                {project.length > 0 && (
                    project.map((project) => {
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category?.name}
                            key={project.id}
                            handleDelet={deletar}
                        />
                    })
                )}
                {!deletLoading && (<Loading />)}
                {!deletLoading && project.length === 0 && (<h2>não há</h2>)}
            </Container>
        </div>
    )
}
export default Projetos