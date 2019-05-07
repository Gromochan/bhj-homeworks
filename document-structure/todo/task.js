const entry = document.getElementById("task__input");
const button = document.getElementById("tasks__add");


addTask = () => {
    document.getElementById("tasks").insertAdjacentHTML("beforeend", `<div class="task"><div class="task__title">${entry.value}</div><a href="#" class="task__remove">&times;</div>`);
    entry.value = null;
}
button.onclick = function (e) {
    e.preventDefault();
    addTask();

}
entry.onkepress = function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addTask();
    }
}

onclick = function (e) {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
    }

}
