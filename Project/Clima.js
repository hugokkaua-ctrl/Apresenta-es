const inpus = document.getElementById("cidade")

const city = inpus.value

const condicao = document.getElementById("condicao")
const temperatura = document.getElementById("temperatura")
const local = document.getElementById("local")







function Horas() {
    setInterval(function () {
        let data = new Date()

        /*HORARIO */
        let horas = data.getHours()
        let min = data.getMinutes()
        let sec = data.getSeconds()

        /*DATA */
        let mes = data.getMonth()
        let dia = data.getDate()
        let ano = data.getFullYear()

        if (horas < 10) {
            document.getElementById("hora").innerHTML = "0" + horas + ":" + min + ":" + sec
        } else {
            document.getElementById("hora").innerHTML = horas + ":" + min + ":" + sec
        }

        if (mes < 10 || dia < 10) {
            document.getElementById("data").innerHTML = dia + "/0" + mes + "/" + ano
        } else {
            document.getElementById("data").innerHTML = dia + mes + "/" + "/" + ano
        }

    }, 1000)
}