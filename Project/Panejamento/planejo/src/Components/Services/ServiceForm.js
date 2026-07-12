import { useState } from "react"
import Input from "../Form/Input"

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState()

    function submit(e) {

    }
    function handleChange(e) {

    }

    return (
        <form onSubmit={submit} >
            <Input
                type="text"
                name="name"
                text="nome do serviço"
                placeHolder="Nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                name="cost"
                text="Valor do serviço"
                placeHolder="Valor do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                name="description"
                text="descriçao do serviço"
                placeHolder="Descreva o serviço"
                handleOnChange={handleChange}
            />
        </form>
    )
}

export default ServiceForm