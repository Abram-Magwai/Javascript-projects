var circles = document.querySelectorAll(".circle");
console.log(circles);
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var progress = document.getElementById("progress-line");

var currentIndex = 1;

next.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= circles.length){        
        currentIndex = circles.length;
    }
    Update();
})

prev.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex <= 1) {
        currentIndex = 1;
    }
    Update();
})


function Update() {
    circles.forEach((ele, indx) => {
        if(indx < currentIndex) {
            ele.classList.add("active");
        }else {
            ele.classList.remove("active");
        }
    })
    const actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentIndex === 1) {
        prev.disabled = true;
    }else if(currentIndex === circles.length) {
        next.disabled = true;
    }else {
        next.disabled = false;
        prev.disabled = false;
    }
}