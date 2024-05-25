/*
    IMPORTS
*/
import Functionality from "./functionality.js"
import Menu from "./menu.js"
import Step from "./Step.js"

/*
    Class Discover :
    Manage the HMI
*/
class Discover {
    // DOM elements
    display
   

    // Menu of discover
    mainMenu

    //Home page
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

    // Show a current item
    show() {
        this.clearDisplay()
        this.itemShow.getShowElements().forEach(element => {this.display.appendChild(element)});
    }

    // When arrow up is pressed
    up() {
        this.itemShow.mooveUp()
        this.show()
    }

    // When arrow down is pressed
    down() {
        this.itemShow.mooveDown()
        this.show()
    }

    // When menu button is pressed
    menu() {
        if(this.itemShow === this.home) {
            this.itemShow = this.mainMenu
        } else {
            this.back()
        }
        this.show()
    }

    // When back button is pressed
    back() {
        if(this.itemShow !== this.home) {
            this.itemShow.back()

            if(this.itemShow === this.mainMenu) {
                this.itemShow = this.home
                this.show()
            } else {
                this.itemShow = this.getParent(this.itemShow)
                this.show()
            }
        }
    }

    // When of menu is pressed
    ok(){
        this.itemShow = this.itemShow.ok()
        this.show()
    }

    // Clear all screen content
    clearDisplay(){
        this.display.textContent = ""
    }

    // Create home 
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

    // Create the main menu
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

        /* Create connectivity */
        const connectivityStep1Title = document.createElement("h3")
        connectivityStep1Title.classList.add("functionality-title")
        connectivityStep1Title.textContent = "QR code"
        const connectivityStep1IMG = document.createElement("img")
        connectivityStep1IMG.classList.add("functionality-img")
        connectivityStep1IMG.src = "../Ressources/qr-code-connectivity.svg"
        connectivityStep1IMG.alt = "QR Code à scanner pour effectuer l'appairage"
        const connectivityStep1Text = document.createElement("p")
        connectivityStep1Text.classList.add("functionality-text")
        connectivityStep1Text.textContent = "Code PIN"
        const connectivityStep1 = new Step([connectivityStep1Title, connectivityStep1IMG, connectivityStep1Text])



        const connectivity = new Functionality("Wifi / Cloud", [connectivityStep1])





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

    // Retrun the parent objet of a child pass in parametter
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



