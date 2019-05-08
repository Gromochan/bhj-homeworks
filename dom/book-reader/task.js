const button = document.getElementsByClassName("font-size");
const bookContent = document.getElementsByClassName("book__content").item(0);
for (let i = 0; button.length > i; i++) {
    let f = i;
    button.item(f).onclick = function (e) {
        e.preventDefault()
        if (button.item(f).classList.contains("font-size_small")) {
            bookContentAdder("small")
            buttonChecker(f)
        } else if (button.item(f).classList.contains("font-size_big")) {
            bookContentAdder("big")
            buttonChecker(f)
        } else {
            bookContentAdder()
            buttonChecker(f)
        }
    }
}

function bookContentAdder(a) {
    if (a == "big") {
        bookContent.classList.add("book_fs-big");
        bookContent.classList.remove("book_fs-small");
    } else if (a == "small") {
        bookContent.classList.remove("book_fs-big");
        bookContent.classList.add("book_fs-small");
    } else {
        bookContent.classList.remove("book_fs-big");
        bookContent.classList.remove("book_fs-small");
    }
}

function buttonChecker(f) {
    for (let i = 0; button.length > i; i++) {
        if (button.item(i).classList.contains("font-size_active")) {
            button.item(i).classList.remove("font-size_active");
        }
        button.item(f).classList.add("font-size_active");
    }
}
