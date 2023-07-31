const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".navFlex")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active");
})

const links = document.querySelectorAll(".navLink")

links.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))