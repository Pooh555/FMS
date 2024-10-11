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
