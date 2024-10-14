// Check if the user is authorizezd
function isAuth(isAuthLocal, isAuthSession) {
  if (isAuthLocal != "true" && isAuthSession != "true") {
    window.location.assign("../index.html");
    sessionStorage.setItem("isLogin", false);
  }
}

// Non-static display value
function updateAuthButtonMessage() {
  const authBtnMessage = document.getElementById("authBtn");

  if (localStorage.getItem("isAuth") === "true") {
    if (localStorage.getItem("username") != null) {
      authBtnMessage.textContent = localStorage.getItem("username");
    } else {
      console.log("Some values in local storage are missing.");
    }
  } else if (sessionStorage.getItem("isAuth") === "true") {
    if (sessionStorage.getItem("username") != null) {
      authBtnMessage.textContent = sessionStorage.getItem("username");
    } else console.log("Some values in session storage are missing.");
  } else {
    console.log("Unauthorized");
  }
}
