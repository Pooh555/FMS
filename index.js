// Image slideshow
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");

let slideIndex = 0;

showSlidesAuto();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesAuto() {
  let i = slideIndex;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slideIndex++;

  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  switch (slideIndex - 1) {
    case 0:
      dot1.classList.add("active");
      dot2.classList.remove("active");
      dot3.classList.remove("active");
      break;
    case 1:
      dot1.classList.remove("active");
      dot2.classList.add("active");
      dot3.classList.remove("active");
      break;
    case 2:
      dot1.classList.remove("active");
      dot2.classList.remove("active");
      dot3.classList.add("active");
      break;
    default:
      dot1.classList.remove("active");
      dot2.classList.remove("active");
      dot3.classList.remove("active");
  }

  setTimeout(showSlidesAuto, 5000);
}

// Authentication widget
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  setTimeout(() => {
    wrapper.classList.remove("active");
  }, 300);
});

let emailInput;
let passwordInput;

console.log("Email:", emailInput);
console.log("Password:", passwordInput);

class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  set username(newUsername) {
    if (
      newUsername != null &&
      newUsername.length >= 3 &&
      newUsername.length <= 12
    )
      this._username = newUsername;
    else if (newUsername.length > 12)
      console.error("Username must be no longer than 12 letters.");
    else console.error("Username must be atleast 3 letters long.");
  }

  set password(password) {
    if (newPassword != null && newPassword.length >= 8 && newPassword <= 20)
      this._password = newPassword;
    else if (newPassword.length >= 20)
      console.error("Password must be no longer than 20 letters.");
    else console.error("Password must be atleast 8 letters long.");
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get email() {
    return this._email;
  }
}

const rememberMe = document.getElementById("rememberMe");
const agreeToTerms = document.getElementById("agreeToTerms");

login.onclick = function () {
  // Evaluate checkbox status
  if (rememberMe.checked) console.log("The data is stored.");
  else console.log("The data will be forgotten.");

  // Get email and password
  emailInput = document.querySelector('input[type="email"]').value;
  passwordInput = document.querySelector('input[type="password"]').value;

  // Test
  console.log(`email: ${emailInput}`);
  console.log(`password: ${passwordInput}`);
};

register.onclick = function () {
  // Evaluate checkbox status
  if (agreeToTerms.checked) console.log("The user has agreed to the terms and conditions.");
  else console.log("The user does not accept the terms and conditions.");

  // Get username and password
  emailInput = document.querySelector('input[type="email"]').value;
  passwordInput = document.querySelector('input[type="password"]').value;

  // Test
  console.log(`email: ${emailInput}`);
  console.log(`password: ${passwordInput}`);
};

const currentUser = new User(null, password, email);
