var button = document.querySelector(".button__header");
var popuplog = document.querySelector(".popup-wrapper");
var form = popuplog.querySelector("form");
var logmail = popuplog.querySelector("[name=email]");
var logpassword = popuplog.querySelector("[name=password]");
var storage = localStorage.getItem("logmail");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popuplog.classList.add("log-show");
    
    if (storage) {
        logmail.value = storage;
        logpassword.focus();
    } else {
        logmail.focus();
    }
});

form.addEventListener("submit", function() {
    if (!logmail.value || !logpassword.value) {
        evt.preventDefault();
        console.log("Enter email and password");
    } else {
        localStorage.setItem("logmail", "logmail.value");
    }
});

window.addEventListener("keydown", function(evt) {
    console.log(evt.code)
    if (evt.code === "Escape") {
        popuplog.classList.remove("log-show");
    }
});