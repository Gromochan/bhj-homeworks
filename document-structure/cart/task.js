const dec = document.getElementsByClassName("product__quantity-control_dec");
const inc = document.getElementsByClassName("product__quantity-control_inc");
const productCount = document.getElementsByClassName("product__quantity-value");
const addButton = document.getElementsByClassName("product__add");
const cart = document.getElementsByClassName("cart__products").item(0);


quantityDec = (e) => {
    productCount.item(e).textContent = parseInt(productCount.item(e).textContent) - 1;
}
quantityInc = (e) => {
    productCount.item(e).textContent = parseInt(productCount.item(e).textContent) + 1;
}

addInCart = (e) => {
    console.log(document.getElementsByClassName(`cart__product-${e}`))
    if (document.getElementsByClassName(`cart__product-${e}`)) {
        document.getElementsByClassName("cart__product-count").item(e).textContent === productCount.item(e).textContent;
    }
    cart.insertAdjacentHTML("beforeend", `<div class="cart__product-${e}" data-id="${e}"><img class="cart__product-image" src="image.png"><div class="cart__product-count">${productCount.item(e).textContent}</div></div>`);
}


for (let i = 0; dec.length > i; i++) {
    let e = i;
    dec.item(i).onclick = function () {
        quantityDec(e)
    };
    inc.item(i).onclick = function () {
        quantityInc(e)
    };
    addButton.item(i).onclick = function () {
        addInCart(e)
    };
}
