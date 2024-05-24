/*
    Les classes
*/

class Menu {
    title
    childsItems
    itemSelectedByDefault
    itemSelected

    constructor(title, childsItems, itemSelectedByDefault) {
        this.title = title
        this.childsItems = childsItems
        this.itemSelectedByDefault = itemSelectedByDefault
        this.itemSelected = this.itemSelectedByDefault
    }
}
class Functionality {
    title

    constructor(title) {
        this.title = title
    }
}
class Discover {
    display
    date

    constructor(date) {
        this.date = date
        this.display = document.querySelector(".display")

    }

    show(item) {
        if(item.constructor.name === "Menu"){
            this.showMenu(item)
        } else if(item.constructor.name === "Functionality"){
            this.showFunctionality(item)
        }
        else {
            throw "Parameter is not valid"
        }
    }
    showMenu(item){
        this.clearDisplay()
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = item.title
        this.display.appendChild(menuTitle)
        const menuContainer = document.createElement("div")
        menuContainer.classList.add("menu-container")
        
        for (let index = (item.itemSelected - 2); index <= (item.itemSelected + 3); index++) {
            if (item.childsItems[index]) {
                const menuItem = document.createElement("p")
                menuItem.classList.add("menu-item")
                menuItem.classList.add("menu-item-full")
                menuItem.textContent = item.childsItems[index].title
                menuContainer.appendChild(menuItem)
            } else {
                const menuItem = document.createElement("div")
                menuItem.classList.add("menu-item")
                menuItem.classList.add("menu-item-empty")
                menuContainer.appendChild(menuItem)
            }
        }
        this.display.appendChild(menuContainer)
    }
    showFunctionality(item){
        console.log("func");
    }
    clearDisplay(){
        this.display.textContent = ""
    }
}








/*
    Le code
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
