window.onload = function () {
    document.getElementById("modal_main").classList.add("modal_active");
}

document.getElementsByClassName("modal__close").item(0).onclick = function () {
    document.getElementById("modal_main").classList.remove("modal_active");
}
document.getElementsByClassName("show-success").item(0).onclick = function () {
    document.getElementById("modal_success").classList.add("modal_active");
    document.getElementById("modal_main").classList.remove("modal_active");
}
document.getElementsByClassName("modal__close").item(2).onclick = function () {
    document.getElementById("modal_success").classList.remove("modal_active");
}
