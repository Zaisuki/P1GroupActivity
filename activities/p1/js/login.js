// Forgot Password
var forgotPassword = document.getElementById("forgotPassword");
var closeBtn = document.getElementById("close");
var credentialsContainer = document.getElementById("credentialsContainer");

forgotPassword.addEventListener("click", () => {
    credentialsContainer.style.display = "flex"
})
closeBtn.addEventListener("click", () => {
    credentialsContainer.style.display = "none"
})

// Log In
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var submitForm = document.forms['form']['submitForm'];

var username_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");
var passErrorCode = document.getElementById("passErrorCode");


username.addEventListener('change', usernameVerify);
password.addEventListener('change', passVerify);
submitForm.addEventListener('click', validated);

var totoongTao = {
    username: "admin",
    password: "password"
};

var json = JSON.stringify(totoongTao);

function validated(e) {
    var data = JSON.parse(json);

    if(username.value.toLowerCase() != data.username) {
        password.value.border = "1px solid red";
        passErrorCode.innerText = "Incorrect Username or Password";
        pass_error.style.display = "block";
        username.focus();
        return false;
    }

    if(password.value != data.password) {
        password.value.border = "1px solid red";
        passErrorCode.innerText = "Incorrect Username or Password";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if(username.value.toLowerCase() == data.username && password.value == data.password) {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    }
}

function usernameVerify() {
    if(username.value.length >= 5) {
        username.value.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    } else {
        username.value.border = "1px solid red";
        username_error.style.display = "block";
    }
}

function passVerify() {
    if(password.value.length >= 8) {
        password.value.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    } else {
        password.value.border = "1px solid red";
        pass_error.style.display = "block";
        passErrorCode.innerText = "Invalid Password. Must have 8 characters or longer.";
    }
}

var loginVerify = localStorage.getItem("login");
if (loginVerify === "true") {
    window.location.href = "dashboard.html";
}
let view = document.getElementById("view");

view.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type= "password";
    }
}