const dead = document.getElementById("dead");
const miss = document.getElementById("lost")
handler = (e) => {
    if (e.target.classList.contains("hole_has-mole")) {

        let i = 1 + parseInt(dead.textContent);
        dead.textContent = i;
    } else {

        console.log("BBBBB")
        let l = 1 + parseInt(miss.textContent);
        miss.textContent = l;
    }
    if (miss.textContent == 5) {
        alert("You lose!");
        reset();
    } else if (dead.textContent == 10) {
        alert("You win!")
        reset();
    }
    reset = () => {
        dead.textContent = 0;
        miss.textContent = 0;
    }
}

onclick = handler;
