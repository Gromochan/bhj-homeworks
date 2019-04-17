counter = () => {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;
    console.log(timer.textContent == 0)
    if (timer.textContent == 0) {
        clearInterval(timerId);
        alert("Вы победили!");
    }
};
const timerId = setInterval(counter, 1000);
