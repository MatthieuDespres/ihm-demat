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
        if(this.itemShow.constructor.name === "Menu"){
            this.itemShow = this.itemShow.ok()
            this.show()
        }
        else if(this.itemShow.constructor.name === "Functionality"){
            console.log(this.itemShow.constructor.name);
            this.itemShow.ok()
        }
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
        /* Create in progress */
        const inProgressTitle = document.createElement("h3")
        inProgressTitle.classList.add("functionality-title")
        inProgressTitle.textContent = "En construction"
        const inProgressIMG = document.createElement("img")
        inProgressIMG.classList.add("functionality-img")
        inProgressIMG.src = "../Ressources/tools.svg"
        inProgressIMG.alt = "Patientez le temps du développement de la fonctionnalitée"
        const inProgressText = document.createElement("p")
        inProgressText.classList.add("functionality-text")
        inProgressText.textContent = "Fonctionnalitée en cours de développement"
        const inProgress = new Step([inProgressTitle, inProgressIMG, inProgressText])

        /* Create Tests */
        const testElec = new Functionality("Test Appoint Élec", [inProgress])
        const testColdPAC = new Functionality("Test PAC en Froid", [inProgress])
        const testHeatPAC = new Functionality("Test PAC en Chaud", [inProgress])
        const testsModes = new Menu("Modes Test", [testHeatPAC, testColdPAC, testElec], 0)
        const error501 = new Functionality("24/05/24 - P50.1", [inProgress])
        const error301 = new Functionality("24/05/24 - P30.1", [inProgress])
        const errorHistory = new Menu("Historique Erreurs", [error501, error301], 0)
        const dataSystem = new Functionality("Données Système", [inProgress])
        const diagnostic = new Menu("Diagnostic", [errorHistory, dataSystem, testsModes], 1)
        const reset = new Functionality("Réinitialiser", [inProgress])
        const softVersion = new Functionality("Version Logiciel", [inProgress])
        const rescueMode = new Functionality("Mode Secours", [inProgress])
        const externalPiloting = new Functionality("Pilotage Externe", [inProgress])
        const antiLegionella = new Functionality("Anti-légionelle", [inProgress])
        const electricBoosterExpert = new Functionality("Appoint Électrique", [inProgress])
        const expertMode = new Menu("Accès Expert", [electricBoosterExpert, antiLegionella, externalPiloting, diagnostic, rescueMode, softVersion, reset], 3)




        /* Create instructions */
        const instructionsStep1Title = document.createElement("h3")
        instructionsStep1Title.classList.add("functionality-title")
        instructionsStep1Title.textContent = "QR code"
        const instructionsStep1IMG = document.createElement("img")
        instructionsStep1IMG.classList.add("functionality-img")
        instructionsStep1IMG.src = "../Ressources/qr-code-instructions.svg"
        instructionsStep1IMG.alt = "QR Code à scanner pour afficher la notice"
        const instructionsStep1Text = document.createElement("p")
        instructionsStep1Text.classList.add("functionality-text")
        instructionsStep1Text.textContent = "Scanner pour accéder à la notice en ligne"
        const instructionsStep1 = new Step([instructionsStep1Title, instructionsStep1IMG, instructionsStep1Text])
        const instructions = new Functionality("Notice", [instructionsStep1])

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




        /* A faire */
        const electricBooster = new Functionality("Appoint Électrique", [inProgress])
        const heatingRange = new Functionality("Plage de chauffe", [inProgress])
        const dateTime = new Functionality("Date / Heure", [inProgress])



        /* Create languages */
        const langChangeIMG = document.createElement("img")
        langChangeIMG.src = "../Ressources/checked.svg"
        langChangeIMG.alt = "Icone de validation"
        langChangeIMG.classList.add("checked-img")
        const langStep1 = new Step([langChangeIMG])
        const langPt = new Functionality("Português", [langStep1])
        const langPl = new Functionality("Polski", [langStep1])
        const langNl = new Functionality("Nederlands", [langStep1])
        const langIt = new Functionality("Italiano", [langStep1])
        const langFr = new Functionality("Français", [langStep1])
        const langEs = new Functionality("Español", [langStep1])
        const langEn = new Functionality("English", [langStep1])
        const langDe = new Functionality("Deutsch", [langStep1])
        const lang = new Menu("🏴", [langDe, langEn, langEs, langFr, langIt, langNl, langPl, langPt], 3)





        const settings = new Menu("Paramètres", [lang, dateTime, heatingRange, electricBooster, connectivity, instructions, expertMode], 0)
        const eco = new Functionality("ECO +", [inProgress])
        const manual = new Functionality("MANUEL", [inProgress])
        const instructionsManagement = new Menu("Gestion Consigne", [manual, eco], 0)
        const boost = new Functionality("Boost", [inProgress])
        const absence = new Functionality("Absence", [inProgress])
        const hotWater = new Functionality("Eau Chaude", [inProgress])
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



