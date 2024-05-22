const display = document.querySelector(".display")

const mainMenu = {
    title: "Menu",
    childItems : ["Consommations", "Absence", "Boost", "Gestion Consignes", "Paramétrage"],
    itemDefaultFocus: 2,
    itemFocus: 2,

    show(){
        const menuTitle = document.createElement("h2")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = this.title
        const list = document.createElement("ul")
        list.classList.add("menu-list")
        for (let index = 0; index < this.childItems.length; index++) {
            const listItem = document.createElement("li")
            listItem.classList.add("menu-element")
            if (index === this.itemFocus) {
                listItem.classList.add("selected")
            }
            listItem.textContent = this.childItems[index]
            list.appendChild(listItem)
        }
        display.textContent = ""
        display.appendChild(menuTitle)
        display.appendChild(list)
    }
}
// mainMenu.show()

const menuBtn = document.querySelector(".btn-menu")
menuBtn.addEventListener("click", () => {
    mainMenu.show()
})

const backBtn = document.querySelector(".btn-back")
backBtn.addEventListener("click", () => {
    display.textContent = ""
    display.innerHTML = '<h2 class="menu-title">Accueil</h2>'
})




class Discover {
    display = document.querySelector(".display")



    static show(item) {
        console.log(item);
    }
}