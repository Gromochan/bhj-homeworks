const dec = document.getElementsByClassName("product__quantity-control_dec");
const inc = document.getElementsByClassName("product__quantity-control_inc");
const productCount = document.getElementsByClassName("product__quantity-value");
const addButton = document.getElementsByClassName("product__add");
const cart = document.getElementsByClassName("cart__products").item(0);


quantityDec = (e) => {
    if (parseInt(productCount.item(e).textContent) > 1) {
        productCount.item(e).textContent = parseInt(productCount.item(e).textContent) - 1;
    }
}
quantityInc = (e) => {
    productCount.item(e).textContent = parseInt(productCount.item(e).textContent) + 1;
}


addInCart = (e) => {
    if (document.getElementById(`${e}`) != null) {
        let cartContent = document.getElementById(`${e}`);
        cartContent.textContent = parseInt(cartContent.textContent) + parseInt(productCount.item(e).textContent);
        return
    } else {
        cart.insertAdjacentHTML("beforeend", `<div class="cart__product-${e}" data-id="${e}"><img class="cart__product-image" src="${document.getElementsByClassName("product__image").item(e).src}"><div class="cart__product-count" id="${e}">${productCount.item(e).textContent}</div></div>`);

    }
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
