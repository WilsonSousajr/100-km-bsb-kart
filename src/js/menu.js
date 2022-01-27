const hamburguer =  document.querySelector("#hamburguer")
const navbar = document.querySelector("#nav-items")

const hamburguer_menu = {
    top: document.querySelector("#top"),
    middle: document.querySelector("#middle"),
    bottom: document.querySelector("#bottom")
}

hamburguer.addEventListener("click", function(){
    hamburguer_menu.top.classList.toggle('hamburguer-top-rotate')
    hamburguer_menu.middle.classList.toggle('hidden')
    hamburguer_menu.bottom.classList.toggle('hamburguer-bottom-rotate')
})