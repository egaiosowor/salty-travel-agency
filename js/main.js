const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-toggled");
    mobileMenu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll")
});


 
var categoriesSwiper = new Swiper(".categories .slide-content", {
  slidesPerView: 3,
  spaceBetween: 5,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".categories .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".categories .swiper-button-next",
    prevEl: ".categories .swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1.5,
      },
      520: {
          slidesPerView: 3,
      },
      950: {
          slidesPerView: 4,
      },
  },
});


var bookSwiper = new Swiper(".book .slide-content", {
  slidesPerView: 6,
  // spaceBetween: 10,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".book .swiper-button-next",
    prevEl: ".book .swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      450: {
          slidesPerView: 1.5,
      },
      600: {
          slidesPerView: 2,
      },
      700: {
        slidesPerView: 2.5,
      },
      950: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3.5,
      },
  },
});
