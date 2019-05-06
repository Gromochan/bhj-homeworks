const formData = new FormData(document.getElementById("form"));
const req = new XMLHttpRequest();
form.addEventListener('submit', e => {
    e.preventDefault();
    req.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    req.send(formData);
    const upload = req.upload;
    upload.addEventListener("onprogress", (console.log(upload)))

})
