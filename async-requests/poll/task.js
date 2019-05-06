const req = new XMLHttpRequest();
req.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php", true);
req.responseType = "json";
req.send();
const title = document.createElement("span")
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        title.textContent = req.response.data.title
        document.getElementById("poll__title").insertAdjacentElement("afterbegin", title)
        req.response.data.answers.forEach(function (item, i, arr) {
            let answer = document.createElement('button');
            answer.onclick = function () {
                alert("Спасибо, Ваш голос учтен!")
            }
            answer.textContent = item;
            answer.id = `answer${i+1}`;
            document.getElementById("poll__answers").insertAdjacentElement("afterbegin", answer)
        })

    }
}
