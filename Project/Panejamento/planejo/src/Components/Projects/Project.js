import Select from "../Form/Select"
import Input from "../Form/Input"
import { useEffect, useState } from "react"

function Project({ handleSubmit, projectData, btnText }) {



    const submit = (e) => {

    }

    function handleChange(e) { }
    function handleCategory(e) { }

    return (
        <div>

            <form onSubmit={ }>
                <Input type="text" name="name" id="nome" placeHolder="Fale seu " handleOnChange={ } value={ } />
                <Input type="text" name="budget" id="Numero" placeHolder="Fale seu " handleOnChange={ } value={ } />
                <Select name="category" options={ } handleOnChange={ } value={ } />
                <button type=" submit">{btnText}</button>
            </form>
        </div>
    )
}

export default Project