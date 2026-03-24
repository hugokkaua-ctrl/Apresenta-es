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