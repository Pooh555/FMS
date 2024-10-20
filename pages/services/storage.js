// Is the user logged in?
const isAuthLocal = localStorage.getItem("isAuth");
const isAuthSession = sessionStorage.getItem("isAuth");

isAuth(isAuthLocal, isAuthSession);

let currentUser = new User(null, null, null);

if (sessionStorage.getItem("username") != null) {
    currentUser.username = sessionStorage.getItem("username");
}
if (localStorage.getItem("username") != null) {
    currentUser.username = localStorage.getItem("username");
}


console.log(`${currentUser.username}`);

// Non-static display value
updateAuthButtonMessage();

// Upload file
const serverAddress = "http://10.241.68.145:3000";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#upload");
    form.action = `${serverAddress}/users/upload`;
});
