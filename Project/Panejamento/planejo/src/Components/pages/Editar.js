import style from "./Editar.module.css"
import ServiceCard from "../Services/ServiceCard"
import Loading from "../Layout/Loading"
import Container from "../Layout/Container"
import Project from "../Projects/Project"
import ServiceForm from "../Services/ServiceForm"
import Mensagem from "../Layout/Mensagem"
import { useParams } from "react-router-dom"
import { parse, v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"

function Editar() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [service, setService] = useState([])
    const [showProject, setShowProject] = useState(false)
    const [showService, setShowService] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        setTimeout(() => {

        }, 1000);
    }, [id])

    function editPost(project) { }

    function togleProject() {
        setShowProject(!showProject)
    }

    return (
        <>
            {project.name ? (
                <div>
                    <div>

                        <div>
                            <div>
                                <h2></h2>
                                <button></button>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2></h2>
                                <button></button>
                            </div>
                        </div>

                        <div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
export default Editar