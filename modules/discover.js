/*
    Class Discover :
    Manage the HMI
*/
class Discover {
    // Refers to the screen element of the dom
    display

    constructor() {
        this.display = document.querySelector(".display")
    }

    // Show an element whether it is a feature or a menu
    show(item) {
        this.clearDisplay()

        if(item.constructor.name === "Menu"){
            this.showMenu(item)
        } else if(item.constructor.name === "Functionality"){
            this.showFunctionality(item)
        }
        else {
            throw "Parameter is not valid"
        }
    }

    // Show a menu
    showMenu(item){
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

    // Show a functionality
    showFunctionality(item){
        console.log("func");
    }

    // Clear all screen content
    clearDisplay(){
        this.display.textContent = ""
    }
}
export default Discover