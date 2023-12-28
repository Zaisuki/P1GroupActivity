var loginBtn = document.getElementById("login-btn")

loginBtn.text = localStorage.getItem("login") === "true" ? "Logout" : "Login"
console.log(localStorage.getItem("login") === "true")
// Log Out
loginBtn.addEventListener("click", () => {
    var loginVerify = localStorage.getItem("login");
    if (loginBtn.text === "Logout" && loginVerify === "true") {
        window.location.href = "login.html";
        localStorage.removeItem("login")
    }
})
var loginVerify = localStorage.getItem("login");
if (loginVerify !== "true") {
    window.location.href = "login.html";
}