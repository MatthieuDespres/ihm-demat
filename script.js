/*
    IMPORTS
*/
import Discover from "./modules/discover.js"
import Menu from "./modules/menu.js"
import Functionality from "./modules/functionality.js"

/*
    MAIN CODE
*/
const testElec = new Functionality("Test Appoint Élec")
const testColdPAC = new Functionality("Test PAC en Froid")
const testHeatPAC = new Functionality("Test PAC en Chaud")
const testsModes = new Menu("Modes Test", [testHeatPAC, testColdPAC, testElec], 0)
const error501 = new Functionality("24/05/24 - P50.1")
const error301 = new Functionality("24/05/24 - P30.1")
const errorHistory = new Menu("Historique Erreurs", [error501, error301], 0)
const dataSystem = new Functionality("Données Système")
const diagnostic = new Menu("Diagnostic", [errorHistory, dataSystem, testsModes], 1)
const reset = new Functionality("Réinitialiser")
const softVersion = new Functionality("Version Logiciel")
const rescueMode = new Functionality("Mode Secours")
const externalPiloting = new Functionality("Pilotage Externe")
const antiLegionella = new Functionality("Anti-légionelle")
const electricBoosterExpert = new Functionality("Appoint Électrique")
const expertMode = new Menu("Accès Expert", [electricBoosterExpert, antiLegionella, externalPiloting, diagnostic, rescueMode, softVersion, reset], 3)
const instructions = new Functionality("Notice")
const connectivity = new Functionality("Wifi / Cloud")
const electricBooster = new Functionality("Appoint Électrique")
const heatingRange = new Functionality("Plage de chauffe")
const dateTime = new Functionality("Date / Heure")
const langPt = new Functionality("Português")
const langPl = new Functionality("Polski")
const langNl = new Functionality("Nederlands")
const langIt = new Functionality("Italiano")
const langFr = new Functionality("Français")
const langEs = new Functionality("Español")
const langEn = new Functionality("English")
const langDe = new Functionality("Deutsch")
const lang = new Menu("🏴", [langDe, langEn, langEs, langFr, langIt, langNl, langPl, langPt], 3)
const settings = new Menu("Paramètres", [lang, dateTime, heatingRange, electricBooster, connectivity, instructions, expertMode], 0)
const eco = new Functionality("ECO +")
const manual = new Functionality("MANUEL")
const instructionsManagement = new Menu("Gestion Consigne", [manual, eco], 0)
const boost = new Functionality("Boost")
const absence = new Functionality("Absence")
const hotWater = new Functionality("Eau Chaude")
const consumption = new Menu("Consomations", [hotWater], 0)
const menu = new Menu("Menu", [consumption,absence,boost,instructionsManagement,settings], 2)




const discover = new Discover(menu)







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
    discover.show()
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
