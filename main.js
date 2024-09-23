// burger button
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("text-white");
  burgerBtn.classList.toggle("ri-menu-line");
  burgerBtn.classList.toggle("ri-close-line");
  navMenu.classList.toggle("swipe-left");
});

// swiperjs1
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".swiper2", {
  loop: true,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
});

const swiper3 = new Swiper(".swiper3", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,
});
swiper2.controller.control = swiper3;

// FAQ
const accordions = document.querySelectorAll(".accordion");
const answers = document.querySelectorAll(".answer");

function closeAnswer() {
  answers.forEach((answer) => {
    answer.classList.add("hidden");
  });
}

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    closeAnswer();

    const answer = this.querySelector(".answer");
    answer.classList.toggle("hidden");

    const arrowIcon = this.querySelector("i");
    arrowIcon.classList.toggle("ri-arrow-down-s-line");
    arrowIcon.classList.toggle("ri-arrow-up-s-line");
  });
});
