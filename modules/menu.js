class Menu {
    title
    childsItems
    itemSelectedByDefault
    selectedItem
    constructor(title, childsItems, itemSelectedByDefault) {
        this.title = title
        this.childsItems = childsItems
        this.itemSelectedByDefault = itemSelectedByDefault
        this.selectedItem = this.itemSelectedByDefault
    }
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
    mooveUp(){
        if(this.selectedItem > 0 ){
            this.selectedItem -= 1
        }
    }
    mooveDown(){
        if(this.selectedItem < (this.childsItems.length - 1)){
            this.selectedItem += 1
        }
    }
    ok(){
        return this.childsItems[this.selectedItem]
    }
    back() {
        this.resetSelectedItem()
    }
    resetSelectedItem() {
        this.selectedItem = this.itemSelectedByDefault
    }
}
export default Menu