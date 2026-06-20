const tempo = document.getElementById("tempo")

function abrir() {

    const horas = document.getElementById("horas")
    const dias = document.getElementById("dias")

    setInterval(() => {
        const data = new Date()

        const hora = data.getHours()
        const minuto = data.getMinutes()
        const segundo = data.getSeconds()

        const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"]
        const semanas = semana[data.getDay()]

        horas.innerHTML = hora + ":" + minuto + ":" + segundo
        dias.innerHTML = semanas
    }, 1000)
}
