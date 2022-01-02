var body = document.body;
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slides = document.querySelectorAll(".slide");

var activeIndex = 0;

setBodyBackground();

next.addEventListener("click", () => {
    activeIndex ++;
    if(activeIndex > slides.length - 1) {
        activeIndex = 0
    }
    setBodyBackground();
    setActiveSlide();
})
prev.addEventListener("click", () => {
    activeIndex --;
    if(activeIndex < 0) {
        activeIndex = slides.length - 1;
    }
    setBodyBackground();
    setActiveSlide();
})

function setBodyBackground() {
    body.style.backgroundImage = slides[activeIndex].style.backgroundImage;
}
function setActiveSlide() {
    slides.forEach(ele => ele.classList.remove("active"));
    slides[activeIndex].classList.add("active");
}