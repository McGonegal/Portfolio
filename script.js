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

const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
});

hiddenElements.forEach((el) => observer.observe(el));

