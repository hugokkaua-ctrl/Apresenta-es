let inpu = document.getElementById("cidade").value
let condicao = document.getElementById("condicao").innerHTML

function enviar() {
    let inpu = document.getElementById("cidade").value
    let mod = inpu.toUpperCase()

    document.getElementById("local").innerHTML = mod
}