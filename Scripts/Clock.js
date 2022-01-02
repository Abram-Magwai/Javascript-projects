var theme = document.getElementById("theme");
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var sec = document.querySelector(".second");

theme.addEventListener("click", element => {
    var html = document.querySelector("html");
    if(!html.classList.contains("dark")) {
        console.log(element);
        html.classList.add("dark");
        element.target.innerHTML = "Light Mode";
    }else {
        html.classList.remove("dark");
        element.target.innerHTML = "Dark Mode";
    }
})
var scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function setTime() {
    var time = new Date();
    var hours = time.getHours();
    var Minutes = time.getMinutes();
    var seconds = time.getSeconds()
    
    hour.style.transform = `translate(20%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`;
    minute.style.transform = `translate(20%, -100%) rotate(${scale(Minutes, 0, 59, 0, 360)}deg)`;
    sec.style.transform = `translate(20%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
}
setInterval(setTime, 1000);

