const area = document.getElementById("area")

const btn1 = document.getElementById("claro")
const btn2 = document.getElementById("dark")

function envia() { }

function submit() { }


function mudar_dark() {
    document.body.style.background = "#200F07"
    area.style.background = "#702806"
    btn1.style.display = "none"
    btn2.style.display = "block"
}
function mudar_claro() {
    document.body.style.background = "#C5E284"
    btn1.style.display = "block"
    btn2.style.display = "none"
}