function ServiceCard({ id, name, cost, detalhe, handleDelete }) {

    const deletar = (e) => {
        e.preventDefault()
        handleDelete(id)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cost}</h2>
            <h2>{detalhe}</h2>

            <div>
                <button onClick={deletar}>Excluir</button>
            </div>
        </div>
    )

}
export default ServiceCard