var reaction = document.querySelectorAll(".action");
var toast = document.querySelector(".toast");
var addComment = document.querySelector(".add-comment");

reaction.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("clicked");
        if(e.classList.contains("like")) {
            if(e.classList.contains("liked")) {
                toast.innerHTML = "Like Removed";
            }else {
                toast.innerHTML = "Like Added";
            }
            e.classList.toggle("liked");

            toast.classList.add("visible");
            setTimeout(removeToast, 3000);
        }
        
        if(e.classList.contains("new-comment")) {
            var comment = document.querySelector(".comment");
            var commentBox = document.querySelector(".comment-box");
            comment.classList.toggle("visible");
            commentBox.focus();
        }
        
    })
})
function removeToast() {
    toast.classList.remove("visible");
}
addComment.addEventListener("click", () => {
    toast.innerHTML = "Comment will be added soon!"
    toast.classList.add("visible");
    setTimeout(removeToast, 3000);
    var comment = document.querySelector(".comment");
    var commentBtn = document.querySelector(".new-comment");
    comment.classList.remove("visible");
    commentBtn.classList.remove("clicked");
})