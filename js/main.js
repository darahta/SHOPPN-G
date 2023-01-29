import header from "./header.js";
import productsFunc from "./products.js";

// ?----------------------------
//! slider start

let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
   showSlides((slideIndex += 1));
}, 3000);

function plusSlide(n) {
   showSlides((slideIndex += n));
}

function currentSlide(n) {
   showSlides((slideIndex = n));
}

function showSlides(n) {
   const slides = document.getElementsByClassName("slider-item");
   const dots = document.getElementsByClassName("slider-dot");

   if (n > slides.length) {
      slideIndex = 1;
   }

   if (n < 1) {
      slideIndex = slides.length;
   }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }

   slides[slideIndex - 1].style.display = "flex";
   dots[slideIndex - 1].className += " active";
}

//! slider end

//! add product to localStorage start

(async function getData() {
   const photos = await fetch("../js/data.json");
   const data = await photos.json();
   data ? localStorage.setItem("products", JSON.stringify(data)) : [];
   productsFunc();
})();

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
   ? JSON.parse(localStorage.getItem("cart")).length
   : "0";
//! add cartItems to localStorage end
