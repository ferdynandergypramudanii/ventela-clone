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

let activeAccordion = null; // Untuk menyimpan accordion yang sedang aktif

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const answer = this.querySelector(".answer");
    const arrowIcon = this.querySelector("i");

    // Cek apakah accordion yang diklik adalah accordion yang sama dengan yang aktif
    if (activeAccordion === this) {
      // Toggle hidden jika accordion yang sama diklik lagi
      answer.classList.toggle("hidden");
      arrowIcon.classList.toggle("ri-arrow-down-s-line");
      arrowIcon.classList.toggle("ri-arrow-up-s-line");

      // Jika accordion ditutup, reset activeAccordion
      if (answer.classList.contains("hidden")) {
        activeAccordion = null;
      }
    } else {
      // Tutup accordion yang aktif sebelumnya
      closeAnswer();

      // Buka accordion yang baru diklik
      answer.classList.remove("hidden");
      arrowIcon.classList.add("ri-arrow-up-s-line");
      arrowIcon.classList.remove("ri-arrow-down-s-line");

      // Update accordion yang aktif
      activeAccordion = this;
    }
  });
});

function closeAnswer() {
  if (activeAccordion) {
    const activeAnswer = activeAccordion.querySelector(".answer");
    const activeArrowIcon = activeAccordion.querySelector("i");

    // Tutup accordion yang aktif
    activeAnswer.classList.add("hidden");

    // Reset ikon panah
    activeArrowIcon.classList.add("ri-arrow-down-s-line");
    activeArrowIcon.classList.remove("ri-arrow-up-s-line");
  }
}
