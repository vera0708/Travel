
var link = document.querySelector(".three-lines");
var burgermenu = document.querySelector(".burger-wrapper");
var closeButton = document.querySelector(".crossmark");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    burgermenu.classList.add("menu-show");
});

closeButton.addEventListener("click", function() {
    evt.preventDefault();
    burgermenu.classList.remove("menu-show");
}) 
