const hamburger_menu = document.querySelector(".s1-right-mid");
const container = document.querySelector(".sidebar1");
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
