const input = document.querySelector("#cidade")
const butao = document.querySelector("#butao")
const condicao = document.querySelector("#condicao")
const temperatura = document.querySelector("#temperatura")
const local = document.querySelector("#local")

const apiKey = "0408e36a5540998e1080d2e39c65cc17";

const getWatherDate = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
}

const ShowerData = async (city) => {

    const data = await getWatherDate(city);

    if (data.cod === 404) {
        console.log("erro");
        return;
    }


    condicao.innerText = data.weather[0].description;
    local.innerText = data.name;
    temperatura.innerText = parseInt(data.main.temp) + "°C";
}

butao.addEventListener("click", async (e) => {
    e.preventDefault();

    const cidade = input.value;

    ShowerData(cidade);
})



function HorasDate() {
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
            document.querySelector("#hora").innerText = "0" + horas + ":" + min + ":" + sec
        } else {
            document.querySelector("#hora").innerText = horas + ":" + min + ":" + sec
        }

        if (mes < 10 || dia < 10) {
            document.querySelector("#data").innerText = dia + "/0" + mes + "/" + ano
        } else {
            document.querySelector("#data").innerText = dia + mes + "/" + "/" + ano
        }

    }, 1000)
}