const ad = document.getElementsByClassName("rotator__case_active");
setInterval(change, 1000);

function change() {
    if (ad.item(0).nextElementSibling === null) {
        ad.item(0).classList.toggle("rotator__case_active");
        document.getElementsByClassName("rotator__case").item(0).classList.add("rotator__case_active");

    } else {
        ad.item(0).nextElementSibling.classList.toggle("rotator__case_active");
        ad.item(0).classList.toggle("rotator__case_active");
    }

}
