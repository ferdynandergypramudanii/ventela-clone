// burger button
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("text-white");
  burgerBtn.classList.toggle("ri-close-line");
  navMenu.classList.toggle("swipe-left");
});

// swiperjs
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
