import Functionality from "./functionality.js"
import Menu from "./menu.js"
/*
    Class Discover :
    Manage the HMI
*/
class Discover {
    // Refers to the screen element of the dom
    display

    // Menu of discover
    mainMenu

    //Home
    home

    // Item actualy show on display
    itemShow


    constructor() {
        this.display = document.querySelector(".display")

        this.mainMenu = this.createMenu()

        this.home = new Functionality("Ven 11:23")

        this.itemShow = this.home

        this.show()
    }

    // Show an element whether it is a feature or a menu
    show() {
        this.clearDisplay()
        this.itemShow.getShowElements().forEach(element => {this.display.appendChild(element)});
    }

    up() {
        this.itemShow.mooveUp()
        this.show()
    }

    down() {
        this.itemShow.mooveDown()
        this.show()
    }
    menu() {
        if(this.itemShow === this.home) {
            this.itemShow = this.mainMenu
        } else {
            this.back()
        }
        this.show()
    }
    back() {
        if(this.itemShow !== this.home) {
            if(this.itemShow.constructor.name === "Menu") {
                // Reset the selected item from the origin
                this.itemShow.resetSelectedItem()

                if(this.itemShow === this.mainMenu) {
                    this.itemShow = this.home
                    this.show()
                }
            }
        }
        if(this.itemShow !== this.home && this.itemShow !== this.mainMenu){
            //Il faut gérer le fait de remonter au menu parent
            this.itemShow = this.getParent(this.itemShow)
            this.show()
        }
    }
    ok(){
        if(this.itemShow.constructor.name === "Menu") {
            this.itemShow = this.openMenu()
            this.show()
        }
    }

    // Clear all screen content
    clearDisplay(){
        this.display.textContent = ""
    }
    openMenu(){
        return this.itemShow.childsItems[this.itemShow.itemSelected]   
    }
    createHome() {
        const homeTitle = document.createElement("h2")
        homeTitle.classList.add("home-title")
        homeTitle.textContent = "Ven 11:23"

        const waterDropIMG = document.createElement("img")
        waterDropIMG.src = "../Ressources/water-drop.svg"
        waterDropIMG.classList.add("water-drop")
        waterDropIMG.alt = "Goutte d'eau"


        this.clearDisplay()
        this.display.appendChild(homeTitle)
        this.display.appendChild(waterDropIMG)
    }

    createMenu() {
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
        return menu
    }
    getParent(findedItem) {
        let parent

        function findParent(node) {
            if(node.childsItems){
                for (let child of node.childsItems) {
                    if (child === findedItem) {
                        parent = node
                        return
                    }
                    findParent(child)
                }
            }
        }
        findParent(this.mainMenu)
        return parent
    }
}
export default Discover



