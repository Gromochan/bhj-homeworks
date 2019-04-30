const entry = document.getElementById("task__input");

addTask = () => {
    console.log('shit')
    entry.insertAdjacentHTML("afterend", `<div class="task"><div class="task__title">${document.getElementById(task__input).textContent}</div><a href="#" class="task__remove">&times;</div>`)
}
entry.addEventListener(`submit`, addTask);
