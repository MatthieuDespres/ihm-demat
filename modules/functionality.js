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