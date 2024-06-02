class Functionality {
    title
    constructor(title) {
        this.title = title
    }
    getShowElements(){
        const elementsToShow = []
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        elementsToShow.push(menuTitle)
        return elementsToShow
    }
}
export default Functionality