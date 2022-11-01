var button = document.querySelector(".button__header");
var popuplog = document.querySelector(".popup-wrapper");
var form = popuplog.querySelector("form");
var logmail = popuplog.querySelector("[name=email]");
var logpassword = popuplog.querySelector("[name=password]");

var link = document.querySelector(".register");
var popsign = document.querySelector(".popsign-wrapper");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popuplog.classList.add("log-show");
    logmail.focus();
});

form.addEventListener("submit", function(evt) {
    if (!logmail.value || !logpassword.value) {
        evt.preventDefault();
        console.log("Enter email and password");
    } 
});

window.addEventListener("keydown", function(evt) {
    if (evt.code === "Escape") {
       if (popuplog.classList.contains("log-show")) {
         evt.preventDefault();
         popuplog.classList.remove("log-show");
       }
    }
});

link.addEventListener("click", function(evt) {
    console.log('sign-show');
    // evt.preventDefault();
    popsign.classList.add("sign-show");
});
