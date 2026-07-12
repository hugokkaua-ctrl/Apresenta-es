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

    }, [])

    return (
        <div>
            <div>
                <h1>Projetos Planejados</h1>
                <Link></Link>
            </div>

            {message && <Mensagem type="sucess" msg={message} />}
            {projectMessage && <Mensagem type="sucess" msg={projectMessage} />}

            <Container >

            </Container>
        </div>
    )
}
export default Projetos