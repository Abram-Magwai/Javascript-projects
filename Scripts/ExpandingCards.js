var imageContainer = document.querySelectorAll(".image");

imageContainer.forEach(element => {
    element.addEventListener("click",() => {
        RemoveActive();
        element.classList.add('active');
    })
});

function RemoveActive() {
    imageContainer.forEach(element => {
        element.classList.remove('active');
    })
}