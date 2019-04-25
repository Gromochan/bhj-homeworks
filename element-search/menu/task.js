const menu = document.getElementsByClassName("menu__item");
handler = (e) => {
    const menuItem = e.target.nextElementSibling;
    if (menuItem) {
        menuItem.classList.add("menu_active")
    }
}
onclick = handler;

// не могу понять почему меню сразу закрывается. Раз оно открывается, значит класс присваевается нужному элементу, а в коде я не закрываю меню.
