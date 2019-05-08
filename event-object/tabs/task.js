const tab = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");
for (let i = 0; tab.length > i; i++) {
    let f = i;
    tab.item(f).tabIndex = 1;

    tab.item(f).onfocus = function (e) {
        let activeContent = document.getElementsByClassName("tab__content_active");
        let activeTab = document.getElementsByClassName("tab_active");
        activeContent.item(0).classList.toggle("tab__content_active");
        activeTab.item(0).classList.toggle("tab_active");
        tab.item(f).classList.toggle("tab_active");
        tabContent.item(f).classList.toggle("tab__content_active")
    }
}
