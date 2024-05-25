/*
    Class Functionality :
    Manage the functionality
*/
class Functionality {
    // Title which is written at the top of the functionality
    title
    steps = []

    constructor(title, steps) {
        this.title = title
        this.steps = steps
    }

    // Return the html elements to show
    getShowElements(){
        const elementsToShow = []
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        elementsToShow.push(menuTitle)
        if(this.steps) {
            this.steps.forEach(step => step.elements.forEach(element => elementsToShow.push(element)))
        }
        return elementsToShow
    }
    // When we move the cursor on the top
    mooveUp(){
    }

    // When we move the cursor on the bottom
    mooveDown(){
    }
    ok(){

    }
    back(){

    }
}
export default Functionality



/* DOM Home */
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



/* Ajouter la fgeature d'alerte avant le menu expert */