const req = new XMLHttpRequest();
req.open("GET", "https://netology-slow-rest.herokuapp.com/");
req.responseType = "json";
req.send();
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        console.log(req.response.response.Valute)
        const data = req.response.response.Valute;
        document.getElementById("loader").remove();
        for (let key in data) {
            document.getElementById("items").insertAdjacentHTML("afterbegin", `<div id=${key}><b>${key}</b>  ${data[key].Value} руб.</div>`)
        };
    }
}
