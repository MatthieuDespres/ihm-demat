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
}
export default Menu