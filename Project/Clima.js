let inpus = document.getElementById("cidade").value
let condicao = document.getElementById("condicao").innerHTML

function enviar() {
    let inpus = document.getElementById("cidade").value
    let mod = inpus.toUpperCase()

    document.getElementById("local").innerHTML = mod
}

async function enviar() {
    const inpu = document.getElementById("cidade").value

    const apiKey = "f25b9a544e6921f2164ae73c8435aed4"

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpu}&appid=${apiKey}&units=metric&lang=pt_br`);
        const dados = await res.json();

        document.getElementById("local").innerHTML = ` ${dados.name} `;
        document.getElementById("temperatura").innerHTML = ` ${dados.main.temp}°C `;
        document.getElementById("condicao").innerHTML = `  ${dados.weather[0].description}`;

    } catch {
        local.innerHTML = "Erro ao buscar clima";
    }

}

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