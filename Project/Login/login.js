const area = document.getElementById("area")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const titulo = document.getElementById("title")
const btn1 = document.getElementById("claro")
const btn2 = document.getElementById("dark")

const recupera1 = document.getElementById("recuperar_senha")
const recupera2 = document.getElementById("recuperar_senha2")

const divisor1 = document.getElementById("divisa1")
const divisor2 = document.getElementById("divisa2")

const btnEnvia1 = document.getElementById("btn1")
const btnEnvia2 = document.getElementById("btn2")
const contatos1 = document.getElementById("contato1")
const contatos2 = document.getElementById("contato2")

function envia() { }

function submit() { }


function mudar_dark() {
    document.body.style.background = "#200F07"
    titulo.style.color = "#C5E284"
    label1.style.color = "#C5E284"
    label2.style.color = "#C5E284"
    area.style.background = "#702806"
    btn1.style.display = "none"
    btn2.style.display = "block"

    divisor1.style.display = "None"
    divisor2.style.display = "block"
    recupera1.style.display = "none"
    recupera2.style.display = "block"

    btnEnvia1.style.display = "none"
    btnEnvia2.style.display = "flex"
    contatos1.style.display = "none"
    contatos2.style.display = "flex"
}
function mudar_claro() {
    document.body.style.background = "#C5E284"
    titulo.style.color = "#200F07"
    label1.style.color = "#200F07"
    label2.style.color = "#200F07"
    area.style.background = "#C5E284"
    btn1.style.display = "block"
    btn2.style.display = "none"

    divisor1.style.display = "block"
    divisor2.style.display = "none"
    recupera1.style.display = "block"
    recupera2.style.display = "none"


    btnEnvia1.style.display = "flex"
    btnEnvia2.style.display = "none"
    contatos1.style.display = "flex"
    contatos2.style.display = "none"
}