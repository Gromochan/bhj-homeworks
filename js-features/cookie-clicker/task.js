const counter = document.getElementById("clicker__counter");
const cpsCounter = document.getElementById("clicks__in__seconds");
const cookie = document.getElementById('cookie');

distort = () => {
    cookie.width += 50;
    cookie.hight += 50;
}
unDistort = () => {
    cookie.width -= 50;
    cookie.hight -= 50;
}
quickMath = () => {
    distort();
    let clicks = parseInt(counter.textContent);
    clicks += 1;
    counter.textContent = clicks;
    setTimeout(unDistort, 100)
}
let time = 0;
cpsCount = () => {
    time += 1;
    let cps = parseFloat(counter.textContent / time);
    cpsCounter.textContent = cps;
    console.log(time)
}
setInterval(cpsCount, 1000);


cookie.onclick = quickMath;
