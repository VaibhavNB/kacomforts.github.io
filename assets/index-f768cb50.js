(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();
const nav = document.getElementById("nav");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
};

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("my-slides");
const dots = document.getElementsByClassName("dot");
showSlides();
function currentSlide(index) {
  slideIndex = index;
  showSlides();
}
function plusSlides(step) {
  if (step < 0) {
    slideIndex -= 2;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  showSlides();
}
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(showSlides, 4000); // Change image every 5 seconds
}
