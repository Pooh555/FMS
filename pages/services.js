// Is the user logged in?
const isAuthLocal = localStorage.getItem("isAuth");
const isAuthSession = sessionStorage.getItem("isAuth");

isAuth(isAuthLocal, isAuthSession);

// Non-static display value
updateAuthButtonMessage();

// Logout
let logout;
const btnPopup = document.querySelector(".btnLogin-popup");

btnPopup.addEventListener("click", () => {
  logout = window.prompt("Do you wish to logout (y/n): ");
  logout = logout.toLowerCase();

  if (logout === "y") {
    localStorage.clear();
    sessionStorage.clear();
    window.location.assign("../index.html");
  } else console.log("The user does not wish to logout.");
});

// Image slideshow

// Image indexing dots
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");

let slideIndex = 1;

showSlidesAuto(); // Automatically change the slide

// Next image
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Previous image
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Manual slide control
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

// Automatic slide control
function showSlidesAuto() {
  let i = slideIndex;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slideIndex++;

  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  dotsCurrentState(slideIndex);
  setTimeout(showSlidesAuto, 5000); // Change the image every 5.000 seconds
}

// Image indexing dots' behavior
function dotsCurrentState(index) {
  switch (index - 1) {
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
}

// Services route widgets
const widgetStorage = document.querySelector("#widgetStorage");

widgetStorage.addEventListener("click", () => {
  window.location.href = "./services/storage.html";
});