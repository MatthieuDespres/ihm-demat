/*
    Class Functionality :
    Manage the functionality
*/
class Functionality {
    // Title which is written at the top of the functionality
    title

    constructor(title) {
        this.title = title
    }

    // Return the html elements to show
    getShowElements(){
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        return [menuTitle]
    }

    mooveUp(){
        console.log("Fleche haut feature");
    }
    mooveDown(){
        console.log("Fleche bas feature");
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