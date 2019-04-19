const menu = document.getElementsByClassName("menu__item");
handler = (e) => {
    const menuItem = e.target.nextElementSibling;
    if (menuItem) {
        menuItem.classList.add("menu_active")
    }
}
onclick = handler;
