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
    selectedItem

    constructor(title, childsItems, itemSelectedByDefault) {
        this.title = title
        this.childsItems = childsItems
        this.itemSelectedByDefault = itemSelectedByDefault
        this.selectedItem = this.itemSelectedByDefault
    }

    // Return the html elements to show
    getShowElements(){
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        const menuContainer = document.createElement("div")
        menuContainer.classList.add("menu-container")
        for (let index = (this.selectedItem - 2); index <= (this.selectedItem + 3); index++) {
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

    // When we move the cursor on the top
    mooveUp(){
        if(this.selectedItem > 0 ){
            this.selectedItem -= 1
        }
    }

    // When we move the cursor on the bottom
    mooveDown(){
        if(this.selectedItem < (this.childsItems.length - 1)){
            this.selectedItem += 1
        }
    }
    // When whant to acces on sub menu
    ok(){
        return this.childsItems[this.selectedItem]
    }
    //When want to acces to the parent menu
    back() {
        // Reset the selected item from the origin
        this.resetSelectedItem()
    }
    // When we go to the parent menu or the home page we want reset de default position of selector
    resetSelectedItem() {
        this.selectedItem = this.itemSelectedByDefault
    }
}
export default Menu