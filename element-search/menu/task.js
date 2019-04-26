const menu = document.getElementsByClassName("menu__item");
handler = (e) => {

    const menuItem = e.target.nextElementSibling
    if (menuItem) {
        e.preventDefault();
        menuItem.classList.toggle("menu_active")
    }
}
onclick = handler;
