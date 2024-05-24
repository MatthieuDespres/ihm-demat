/*
    Class Menu :
    Manage the Menu
*/
class Menu {
    // Title which is written at the top of the menu
    title

    // Array containing the functionalities or submenus
    childsItems

    // Element selected by default
    itemSelectedByDefault

    // Currently selected item
    itemSelected

    constructor(title, childsItems, itemSelectedByDefault) {
        this.title = title
        this.childsItems = childsItems
        this.itemSelectedByDefault = itemSelectedByDefault
        this.itemSelected = this.itemSelectedByDefault
    }

    // Return the html elements to show
    getShowElements(){
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        const menuContainer = document.createElement("div")
        menuContainer.classList.add("menu-container")
        for (let index = (this.itemSelected - 2); index <= (this.itemSelected + 3); index++) {
            if (this.childsItems[index]) {
                const menuItem = document.createElement("p")
                menuItem.classList.add("menu-item")
                menuItem.classList.add("menu-item-full")
                menuItem.textContent = this.childsItems[index].title
                menuContainer.appendChild(menuItem)
            } else {
                const menuItem = document.createElement("div")
                menuItem.classList.add("menu-item")
                menuItem.classList.add("menu-item-empty")
                menuContainer.appendChild(menuItem)
            }
        }
        return [menuTitle, menuContainer]
    }
    mooveUp(){
        if(this.itemSelected > 0 ){
            this.itemSelected -= 1
        }
    }
    mooveDown(){
        if(this.itemSelected < (this.childsItems.length - 1)){
            this.itemSelected += 1
        }
    }
    resetSelectedItem() {
        this.itemSelected = this.itemSelectedByDefault
    }
}
export default Menu