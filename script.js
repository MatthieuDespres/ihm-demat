/*
    IMPORTS
*/
import Discover from "./modules/discover.js"
import Menu from "./modules/menu.js"
import Functionality from "./modules/functionality.js"

/*
    MAIN CODE
*/


const discover = new Discover(new Date)


const settings = new Menu("Paramètres", [1, 2, 3], 0)
const instructionsManagement = new Menu("Gestion Consigne", [4, 5, 6], 0)
const boost = new Functionality("Boost")
const absence = new Functionality("Absence")
const consumption = new Menu("Consomations", [7], 0)
const menu = new Menu("Menu", [consumption,absence,boost,instructionsManagement,settings], 2)







/*
    Le bazard je ne sais pas trop ou le mettre
*/
const btnDown = document.querySelector(".btn-down")
btnDown.addEventListener("click", handleClickDown)
function handleClickDown() {
    if(menu.itemSelected < (menu.childsItems.length - 1)){
        menu.itemSelected += 1
        discover.show(menu)
    }
}
const btnUp = document.querySelector(".btn-up")
btnUp.addEventListener("click", handleClickUp)
function handleClickUp() {
    if(menu.itemSelected > 0 ){
        menu.itemSelected -= 1
        discover.show(menu)
    }
}
const btnMenu = document.querySelector(".btn-menu")
btnMenu.addEventListener("click", handleMenu)
function handleMenu() {
    discover.show(menu)
}
const btnBack = document.querySelector(".btn-back")
btnBack.addEventListener("click", handleBack)
function handleBack() {
    const homeTitle = document.createElement("h2")
    homeTitle.classList.add("home-title")
    homeTitle.textContent = "Ven 11:23"

    const waterDromIMG = document.createElement("img")
    waterDromIMG.src = "./Ressources/water-drop.svg"
    waterDromIMG.classList.add("water-drop")
    waterDromIMG.alt = "Goutte d'eau"


    discover.clearDisplay()
    discover.display.appendChild(homeTitle)
    discover.display.appendChild(waterDromIMG)
}
