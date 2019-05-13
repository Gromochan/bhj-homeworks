const element = document.getElementsByClassName("has-tooltip");
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
for (let i = 0; element.length > i; i++) {
    let f = i;
    element.item(f).onclick = function (e) {
        e.preventDefault();
        if (tooltip.classList.contains("tooltip-active")) {
            tooltip.classList.toggle("tooltip-active");
            tooltip.style.display = "none"
        } else {
            console.log(element.item(f).title)
            tooltip.textContent = element.item(f).title;
            tooltip.setAttribute("data-position", "left");
            element.item(f).insertAdjacentElement("afterend", tooltip);
            tooltip.classList.toggle("tooltip-active");
            tooltip.style.display = "inline-block";
            tooltip.style.position = "absolute";
            tooltip.style.marginTop = "20px";
        }

    }
}
