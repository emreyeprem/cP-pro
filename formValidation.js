// input elements
let username = document.getElementById("username");
let password = document.getElementById("password");
let userNumber = document.getElementById("usernumber");


// message containers of each validation
let message = document.getElementById("message");
let usernameMsg = document.getElementById("username-message");
let passwordMsg = document.getElementById("password-message");
let userNumberMsg = document.getElementById("user-number-message");

// each item element in message containers
let usernameLetter = document.getElementById("username-letter");
let usernameCapital = document.getElementById("username-capital");
let usernameNumber = document.getElementById("username-number");
let usernameSpecialChr = document.getElementById("username-special-chr");
let passwordNumber = document.getElementById("psw-number");
let passwordLength = document.getElementById("psw-length");
let userNumberLength = document.getElementById("user-number-length");
let userNumberNoLetter = document.getElementById("user-number-no-letter");

// Hide all message containers at the beginning
document.getElementById("username-message").style.display = "none";
document.getElementById("password-message").style.display = "none";
document.getElementById("user-number-message").style.display = "none";



username.onfocus = function() {
    message.innerHTML = '';
    usernameMsg.style.display = "block";
}
password.onfocus = function() {
    message.innerHTML = '';
    passwordMsg.style.display = "block";
}
userNumber.onfocus = function() {
    message.innerHTML = '';
    userNumberMsg.style.display = "block";
}



// When the user clicks outside of the fields, hide the message boxes
username.onblur = function() {
    usernameMsg.style.display = "none";
}
password.onblur = function() {
    passwordMsg.style.display = "none";
}
userNumber.onblur = function() {
    userNumberMsg.style.display = "none";
}

let usernameRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])/
let passwordRegex = /(?=(?:\D*\d){2})^.{8,15}$/
let userNumberRegex = /^[0-9]{36}$/

function checkRegex(input, validationElement, regex){
    if(input.value.match(regex)) {
        validationElement.classList.remove("invalid");
        validationElement.classList.add("valid");
    } else {
        validationElement.classList.remove("valid");
        validationElement.classList.add("invalid");
    }
}
function checkNegativeRegexCase(input, validationElement, regex){
        if(input.value.match(regex)) {
            validationElement.classList.remove("valid");
            validationElement.classList.add("invalid");
        } else {
            validationElement.classList.remove("invalid");
            validationElement.classList.add("valid");
        }
}

// When the user starts to type something inside the username field
username.onkeyup = function() {
    checkRegex(username, usernameLetter, /[a-z]/g);
    checkRegex(username, usernameCapital, /[A-Z]/g);
    checkRegex(username, usernameNumber, /[0-9]/g);
    checkNegativeRegexCase(username, usernameSpecialChr, /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/)
}

// When the user starts to type something inside the password field
password.onkeyup = function() {
    checkRegex(password, passwordNumber, /(?=(?:\D*\d){2})/);
    checkRegex(password, passwordLength, /^.{8,15}$/);

}

// When the user starts to type something inside the user number field
userNumber.onkeyup = function() {
    checkRegex(userNumber, userNumberLength, /^.{36}$/);
    checkRegex(userNumber, userNumberNoLetter, /^(\s+|\d+)$/);
}

function checkFormValidation(event) {
    if (!username.value.match(usernameRegex)) {
        message.innerHTML = 'Please match username criterias.'
        event.preventDefault()
    } else if (!password.value.match(passwordRegex)) {
        message.innerHTML = 'Please match password criterias.'
        event.preventDefault()
    } else if (!userNumber.value.match(userNumberRegex)) {
        message.innerHTML = 'Please match user number criterias.'
        event.preventDefault()
    }

}
