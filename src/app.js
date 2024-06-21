const boutonCloseMenu = document.querySelector("button#close-menu");
const boutonOpenMenu = document.querySelector("button#open-menu");
const menu = document.querySelector("div#menu");
const buttons_menu = document.querySelectorAll("a.liens-menu");

boutonOpenMenu.addEventListener("click", () => {
    menu.classList.remove("hidden");
});

boutonCloseMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
});

buttons_menu.forEach((button) => {
    button.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});