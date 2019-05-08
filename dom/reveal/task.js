const gap = document.getElementsByClassName("reveal");

window.onscroll = function (e) {
    for (let i = 0; gap.length > i; i++) {
        let f = i;
        if (gap.item(f).getBoundingClientRect().top < 600) {
            gap.item(f).classList.add("reveal_active")
        }
    }
}
