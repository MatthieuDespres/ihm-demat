class Functionality {
    title
    steps = []

    constructor(title, steps) {
        this.title = title
        this.steps = steps
    }

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
    mooveUp(){
    }
    mooveDown(){
    }
    ok(){
    }
    back(){
    }
}
export default Functionality