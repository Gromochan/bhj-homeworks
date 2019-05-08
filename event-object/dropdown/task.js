const list = document.getElementsByClassName("dropdown__value").item(0);
list.onclick = function (e) {
    e.preventDefault();
    document.getElementsByClassName("dropdown__list").item(0).classList.toggle("dropdown__list_active");
}
const listItem = document.getElementsByClassName("dropdown__link");

for (i = 0; listItem.length > i; i++) {
    let f = i;
    listItem.item(f).onclick = function (e) {
        e.preventDefault();
        document.getElementsByClassName("dropdown__list").item(0).classList.toggle("dropdown__list_active");
        document.getElementsByClassName("dropdown__value").item(0).textContent = document.getElementsByClassName("dropdown__item").item(f).textContent;
    }
}
