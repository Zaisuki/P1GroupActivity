var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");

username.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);

function validated() {
    if(username.value.length < 9) {
        username.value.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if(password.value.length < 8) {
        password.value.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function emailVerify() {
    if(username.value.length >= 9) {
        username.value.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}

function passVerify() {
    if(password.value.length >= 8) {
        password.value.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}