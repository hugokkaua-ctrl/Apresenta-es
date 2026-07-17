import Select from "../Form/Select"
import Input from "../Form/Input"
import { useEffect, useState } from "react"

function Project({ handleSubmit, projectData, btnText }) {
    const [project, setProject] = useState(projectData || [])
    const [categories, setCategories] = useState([])

    const submit = (e) => {
        e.preventDefault()
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <div>

            <form onSubmit={submit}>
                <Input type="text" name="name" id="nome" placeHolder="Fale seu " handleOnChange={handleChange} value={project.name ? project.name : ""} />
                <Input type="text" name="budget" id="Numero" placeHolder="Fale seu " handleOnChange={handleChange} value={project.budget ? project.budget : ""} />
                <Select name="category" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""} />
                <button type=" submit">{btnText}</button>
            </form>
        </div>
    )
}

export default Project