var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");

username.addEventListener('textInput', usernameVerify);
password.addEventListener('textInput', passVerify);

var totoongTao = {
    username: "MemberNgPHub",
    password: "sekretolangpo"
};

var json = JSON.stringify(totoongTao);
localStorage.setItem(totoongTao, json);

function validated(e) {
    var user = localStorage.getItem(totoongTao);
    var data = JSON.parse(user);
    console.log(data);

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

    if(username == data.username && password == data.password) {
        window.location.href = "dashboard.html";
        console.log("Logged in");
    }
}

function usernameVerify() {
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
