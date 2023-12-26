var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var submitForm = document.forms['form']['submitForm'];

var username_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");

username.addEventListener('change', usernameVerify);
password.addEventListener('change', passVerify);
submitForm.addEventListener('click', validated);

var totoongTao = {
    username: "MemberNgPHub",
    password: "sekretolangpo"
};

var json = JSON.stringify(totoongTao);

function validated(e) {
    var data = JSON.parse(json);

    if(username.value != data.username) {
        username.value.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if(password.value != data.password) {
        password.value.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if(username.value == data.username && password.value == data.password) {
        // TODO: save in localstorage
        window.location.href = "dashboard.html";
    }
}

function usernameVerify() {
    if(username.value.length >= 9) {
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
    }
}
