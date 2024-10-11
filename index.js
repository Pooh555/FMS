// Image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Authentication widget
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
   

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
})

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
})

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
})

iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
    setTimeout(() => {
        wrapper.classList.remove("active");
    }, 300);
})