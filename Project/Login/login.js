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

const informacao = document.getElementById("infors")
const horario = document.getElementById("horas")
const dias = document.getElementById("datas")
const semanas = document.getElementById("semana")

function mudar_dark() {
    document.body.style.background = "#200F07"
    area.style.transition = "ease 1s"
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

    informacao.style.background = "#702806"
    informacao.style.transition = "ease 1s"
    horario.style.color = "#C5E284"
    dias.style.color = "#C5E284"
    semanas.style.color = "#C5E284"
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

    informacao.style.background = "#C5E284"
    horario.style.color = "#200F07"
    dias.style.color = "#200F07"
    semanas.style.color = "#200F07"
}



function Calendario() {

    setInterval(function () {
        const data = new Date()

        const hora = data.getHours()
        const min = data.getMinutes()
        const sec = data.getSeconds()

        const ano = data.getFullYear()
        const mes = data.getMonth() + 1
        const dia = data.getDate()

        const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        const sema = semana[data.getDay()]

        if (mes < 10) {
            dias.innerHTML = ano + "/" + "0" + mes + "/" + dia
            horario.innerHTML = hora + "H: " + min + "M: " + sec + "S"
            semanas.innerHTML = sema
        }

    }, 1000);
}

function validar(senha) {
    if (senha.length < 8 || /\d/.test(senha)) {
        alert("Fenha Fraca ou sem numeros")
    } else {
        alert("Conta criada")
    }
}

function enviar() {
    const inputSenha = document.getElementById("senha").value

    validar(inputSenha)
}