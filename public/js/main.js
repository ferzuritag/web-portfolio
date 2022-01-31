addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.getElementById("burguer-btn");
  btn_menu.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
  });
});
