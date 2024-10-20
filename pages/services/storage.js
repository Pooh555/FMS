// Is the user logged in?
const isAuthLocal = localStorage.getItem("isAuth");
const isAuthSession = sessionStorage.getItem("isAuth");

isAuth(isAuthLocal, isAuthSession);

if (sessionStorage.getItem("username") != null) {
    let currentUser = new User(sessionStorage.getItem("username"), null, null);
}
if (localStorage.getItem("username") != null) {
    let currentUser = new User(sessionStorage.getItem("username"), null, null);
}


console.log(`${currentUser.username}`);

// Non-static display value
updateAuthButtonMessage();

// Upload file
const serverAddress = "http://10.241.68.145:3000";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#upload");
    form.action = `${serverAddress}/users/upload`;

    const { username } = currentUser;

    $.post(
        serverAddress + `${serverAddress}/users/upload`,
        { username },
        function (response, status, xhr) {
            if (xhr.status === 400) {
                console.log("Username uploaded.");
            } else {
                console.log("Username upload unsuccessful.s");
            }
        }
    ).fail(function (xhr) {
        console.log("Unable to upload username.");
    });
});
