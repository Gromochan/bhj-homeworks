const widget = document.getElementsByClassName("chat-widget").item(0);
widget.addEventListener("click", startChat);

function startChat(e) {
    widget.classList.add("chat-widget_active");
    var timeout = setTimeout(botMessage, 30000, timeout);
}
const textField = document.getElementById("chat-widget__input");
textField.addEventListener("keyup", send);


function send(e) {
    if (e.keyCode === 13 && textField.value != "") {

        compileMesage(textField.value, "client")
        textField.value = null;
        botMessage();
    }

}


function botMessage(timeout) {
    clearTimeout(timeout);
    timeout;

    message = randomQuote();


    compileMesage(message, "bot");
}


function compileMesage(messageContent, author) {
    let message = document.createElement("div");
    let messageText = document.createElement("div");
    let timestamp = document.createElement("div");
    let time = new Date();


    timestamp.textContent = time.getHours() + ":" + time.getMinutes();
    messageText.textContent = messageContent;


    message.classList.add("message", `message_${author}`);
    messageText.classList.add("message__text")
    timestamp.classList.add("message__time");




    message.appendChild(timestamp);
    message.appendChild(messageText);



    document.getElementsByClassName("chat-widget__messages").item(0).insertAdjacentElement("beforeend", message);

}

function randomQuote() {
    let i = Math.floor(Math.random() * 9 + 1);
    if (i == 1) {
        return "Не видите? У нас обед!"
    }
    if (i == 2) {
        return "Это не для вас написано!"
    }
    if (i == 3) {
        return "Без талончиков не принимаем!"
    }
    if (i == 4) {
        return "Вам в соседнее окно!"
    }
    if (i == 5) {
        return "У нас учет!"
    }
    if (i == 6) {
        return "Вам в другое отделение, адрес смотрите на стенде!"
    }
    if (i == 7) {
        return "Не мешайте людям работать!"
    }
    if (i == 8) {
        return "Простите, только в порядке очереди!"
    }
    if (i == 9) {
        return "Рабочее время окончено!"
    }
    if (i == 10) {
        return "Перерыв - 15 минут!"
    }

}
