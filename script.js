/*
    IMPORT
*/
import Discover from "./modules/discover.js"

/*
    LISTENERS
*/
const btnDown = document.querySelector(".btn-down")
btnDown.addEventListener("click", handleClickDown)
function handleClickDown() {
    discover.down()
}
const btnUp = document.querySelector(".btn-up")
btnUp.addEventListener("click", handleClickUp)
function handleClickUp() {
    discover.up()
}
const btnMenu = document.querySelector(".btn-menu")
btnMenu.addEventListener("click", handleMenu)
function handleMenu() {
    discover.menu()
}
const btnBack = document.querySelector(".btn-back")
btnBack.addEventListener("click", handleBack)
function handleBack() {
    discover.back()
}
const btnOk = document.querySelector(".btn-ok")
btnOk.addEventListener("click", handleOk)
function handleOk() {
    discover.ok()
}

/*
    MAIN CODE
*/
const discover = new Discover()