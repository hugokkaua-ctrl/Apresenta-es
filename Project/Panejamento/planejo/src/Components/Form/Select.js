function Select({ type, name, id, text, options, handleOnChange, value }) {
    return (
        <div>
            <select name={name} onChange={handleOnChange} value={value || ""}>
                <option>Escolha um pedido</option>

            </select>
        </div>
    )
}

export default Select