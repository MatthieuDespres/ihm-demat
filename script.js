/*
    IMPORTS
*/
import Discover from "./modules/discover.js"
// import Menu from "./modules/menu.js"
// import Functionality from "./modules/functionality.js"

/*
    MAIN CODE
*/
const discover = new Discover()







/*
    Le bazard je ne sais pas trop ou le mettre
*/
const btnDown = document.querySelector(".btn-down")
btnDown.addEventListener("click", handleClickDown)
function handleClickDown() {
    discover.down()
}
const btnUp = document.querySelector(".btn-up")
btnUp.addEventListener("click", handleClickUp)
function handleClickUp() {
    discover.up()
}
const btnMenu = document.querySelector(".btn-menu")
btnMenu.addEventListener("click", handleMenu)
function handleMenu() {
    discover.menu()
}


const btnBack = document.querySelector(".btn-back")
btnBack.addEventListener("click", handleBack)
function handleBack() {
    discover.back()
    
    
    
    
    // const homeTitle = document.createElement("h2")
    // homeTitle.classList.add("home-title")
    // homeTitle.textContent = "Ven 11:23"

    // const waterDromIMG = document.createElement("img")
    // waterDromIMG.src = "./Ressources/water-drop.svg"
    // waterDromIMG.classList.add("water-drop")
    // waterDromIMG.alt = "Goutte d'eau"


    // discover.clearDisplay()
    // discover.display.appendChild(homeTitle)
    // discover.display.appendChild(waterDromIMG)
}
const btnOk = document.querySelector(".btn-ok")
btnOk.addEventListener("click", handleOk)
function handleOk() {
    discover.ok()
}