const signin = document.getElementById("signin");
signin.classList.toggle("signin_active");
const form = document.getElementById("signin__form");
const login = document.getElementsByName("login").item(0);
const password = document.getElementsByName("password").item(0);

const xhr = new XMLHttpRequest();

const button = document.getElementById("signin__btn");
button.addEventListener("click", e => {
    const formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    e.preventDefault();
    xhr.responseType = "json"
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if (xhr.response != null && xhr.response.success === true) {
            signin.classList.toggle("signin_active");
            const welcome = document.getElementById("welcome");
            welcome.classList.add("welcome_active");
            welcome.textContent = welcome.textContent.replace("#", `${xhr.response.user_id}`);

        }
    }
    alert(" Не верный логин или пароль!")

});
