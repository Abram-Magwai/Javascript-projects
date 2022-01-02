var open = document.querySelector(".open-btn");
var close = document.querySelector(".close-btn");
var slides = document.querySelectorAll(".nav")

open.addEventListener("click", () => {
    slides.forEach(slide => {
        slide.classList.add("visible");
    })
})
close.addEventListener("click", () => {
    slides.forEach(slide => {
        slide.classList.remove("visible");
    })
})