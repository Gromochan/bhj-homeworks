window.onload = function () {
    if (localStorage.editorContent != null) {
        editor.value = localStorage.editorContent;
        addButton();
    }
}
const editor = document.getElementById("editor");

editor.onchange = function () {
    const text = editor.value;
    console.log(text);
    localStorage.editorContent = text;
    console.log(localStorage);
    if (document.getElementById("clear") === null) {
        addButton();
    }
}

function addButton() {
    const button = document.createElement("button");
    button.id = "clear";
    button.textContent = "Очистить";

    editor.insertAdjacentElement("afterend", button);
    document.getElementById("clear").onclick = function () {
        editor.value = null;
        localStorage.clear();
    }

}
