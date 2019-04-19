leftArrow = document.getElementsByClassName("slider__arrow_prev").item(0);
rightArrow = document.getElementsByClassName("slider__arrow_next").item(0);
leftArrow.onclick = function () {
    let image = document.getElementsByClassName("slider__item slider__item_active").item(0);
    if (image.previousElementSibling) {
        image.previousElementSibling.classList.add("slider__item_active");
    } else {
        image.parentElement.lastElementChild.classList.add("slider__item_active")
    }
    image.classList.remove("slider__item_active");
}
rightArrow.onclick = function () {
    let image = document.getElementsByClassName("slider__item slider__item_active").item(0);
    if (image.nextElementSibling) {
        image.nextElementSibling.classList.add("slider__item_active");
    } else {
        image.parentElement.firstElementChild.classList.add("slider__item_active")
    }
    image.classList.remove("slider__item_active");
}

dotNav = () => {
    const dot = document.getElementsByClassName("slider__dot");
    for (i = 0; dot.length > i; i++) {
        console.log(i)
        // Не могу понять, почему  данный цикл не работает. По идее, он должен присваивать каждому отдельному объекту свой собственный onclick со своим собственным значением i, но в итоге все получают одно и то же, последнее значение, которое даже получить не должно быть возможным. Почему console.log внутри
        dot.item(i).onclick = function () {
            console.log(i)
            document.getElementsByClassName("slider__item").item(i).classList.add("slider__item_active");
            document.getElementsByClassName("slider__item_active").item(0).classList.remove("slider__item_active")
            dot.item(i).classList.add("slider__dot_active");
        }
    }
}
dotNav();
