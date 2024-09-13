// burger button
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("text-white");
  burgerBtn.classList.toggle("ri-menu-line");
  burgerBtn.classList.toggle("ri-close-line");
  console.log(burgerBtn.classList);
  navMenu.classList.toggle("-right-[40%]");
});
