let Botaomenu = document.getElementById("BotaoMenu")


function AtivarMenu() {
    let menulateral = document.getElementById("menus")

    addEventListener("click", function () {
        menulateral.classList.toggle("aparecer")
    })
}

