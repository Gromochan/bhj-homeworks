const formData = new FormData(document.getElementById("form"));
const req = new XMLHttpRequest();
const progress = document.getElementById("progress");
form.addEventListener('submit', e => {
    e.preventDefault();
    req.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    req.send(formData);
    const upload = req.upload;
    upload.onprogress = function (event) {
        progress.value = `${event.loaded*100/event.total}`;
    }

})
