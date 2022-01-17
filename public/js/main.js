addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.getElementById("burguer_menu_btn");
  btn_menu.addEventListener("click", () => {
    const menu_items = document.querySelector(".nav");
    menu_items.classList.toggle("show");
    console.log("ALGOO");
  });
});
