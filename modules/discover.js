import Functionality from "./functionality.js"
import Menu from "./menu.js"
class Discover {
    date
    display
    mainMenu
    home
    itemShow
    constructor() {
        this.date = new Date()
        this.display = document.querySelector(".display")
        this.mainMenu = this.createMenu()
        this.home = this.createHome()
        this.itemShow = this.home
        this.show()
    }
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
    ok(){
        if(this.itemShow.constructor.name === "Menu"){
            this.itemShow = this.itemShow.ok()
            this.show()
        }
        else if(this.itemShow.constructor.name === "Functionality"){
            this.itemShow.ok()
        }
    }
    clearDisplay(){
        this.display.textContent = ""
    }
    createHome() {
        let day = this.date.getDay()
        switch (day) {
            case 0: day = "Dim"
                break;
            case 1: day = "Lun"
                break;
            case 2: day = "Mar"
                break;
            case 3: day = "Mer"
                break;
            case 4: day = "Jeu"
                break;
            case 5: day = "Ven"
                break;
            case 6: day = "Sam"
                break;
        }
        const hours = this.date.getHours()
        let min = this.date.getMinutes()
        if (min <= 9) {
            min = "0" + min
        }

        return new Functionality(`${day} ${hours}:${min}`)
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
    createMenu() {
        /* Create Tests sub menu */
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
}
export default Discover