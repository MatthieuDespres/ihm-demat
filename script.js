const display = document.querySelector(".display")
const menuBtn = document.querySelector(".btn-menu")
menuBtn.addEventListener("click", openMainMenu)

function openMainMenu() {
    const data = [{title: "Consommations"}, {title: "Absence"}, {title: "Boost"}, {title: "Gestion Consigne"}, {title: "Paramètres"}]

    const mainMenuTitle = document.createElement("h2")
    mainMenuTitle.classList.add("menu-title")
    mainMenuTitle.textContent = "Menu"
    const listItems = document.createElement("ul")
    listItems.classList.add("menu-list")

    data.forEach( item => {
        const listItem = document.createElement("li")
        listItem.classList.add("menu-element")
        listItem.textContent = item.title
        listItems.appendChild(listItem)
    })


    clearDisplay()
    display.appendChild(mainMenuTitle)
    display.appendChild(listItems)

}

function clearDisplay() {
    display.textContent = ""
}

const backBtn = document.querySelector(".btn-back")
backBtn.addEventListener("click", openHomPage)
function openHomPage() {
    const homeTitle = document.createElement("h2")
    homeTitle.classList.add("home-title")
    homeTitle.textContent = "Ven 11:23"

    const waterDromIMG = document.createElement("img")
    waterDromIMG.src = "./Ressources/water-drop.svg"
    waterDromIMG.classList.add("water-drop")
    waterDromIMG.alt = "Goutte d'eau"


    clearDisplay()
    display.appendChild(homeTitle)
    display.appendChild(waterDromIMG)




}
