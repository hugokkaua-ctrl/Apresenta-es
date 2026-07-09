function Input({ type, name, id, text, placeHolder, handleOnChange, value }) {
    return (
        <div>
            <input type={type} id={id} name={name} placeholder={placeHolder} onChange={handleOnChange} value={value} />
        </div>
    )
}

export default Input