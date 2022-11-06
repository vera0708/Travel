var button = document.querySelector(".button__header");
var popuplog = document.querySelector(".popup-wrapper");
var form = popuplog.querySelector("form");
var logmail = popuplog.querySelector("[name=email]");
var logpassword = popuplog.querySelector("[name=password]");

var link = document.querySelector(".register");
var popsign = document.querySelector(".popsign-wrapper");

var registerLink = document.querySelector(".register");
var popupRegister = document.querySelector(".popsign-wrapper");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    openLogin();
    logmail.focus();
});

form.addEventListener("submit", function(evt) {
    if (!logmail.value || !logpassword.value) {
        evt.preventDefault();
        console.log("Enter email and password");
    } 
});

window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    if (evt.code === "Escape") {
        var isLoginPopupOpen = isLoginOpen();
        var isRegisterPopupOpen = isRegisterOpen();

        if (isLoginPopupOpen) {
            closeLogin();
        } else if (isRegisterPopupOpen) {
            popupRegister.classList.remove("log-show");
        }
    }
});

link.addEventListener("click", function(evt) {
    console.log('sign-show');
    // evt.preventDefault();
    popsign.classList.add("sign-show");
});

registerLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    closeLogin();
    console.log(popupRegister);
    popupRegister.classList.add("log-show");
});

function openLogin() {
    popuplog.classList.add("log-show");
}

function closeLogin() {
    popuplog.classList.remove("log-show");
}

function isLoginOpen() {
    return popuplog.classList.contains("log-show");
}

function isRegisterOpen() {
    return popupRegister.classList.contains("log-show");
}
