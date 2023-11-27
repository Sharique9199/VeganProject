let totalItem = JSON.parse(localStorage.getItem('addtoCartData')) || [];
console.log(totalItem);
console.log('sharique outside');
// console.log('totalItem', totalItem);
appendPaymentData(totalItem);

// window.addEventListener('load', appendPaymentData)
function appendPaymentData(data) {
    // console.log('sharique', data);
    data.map((el) => {
        // document.querySelectorAll('.payment_cart').innerHTML = "";

        let div = document.createElement('div');
        div.className = 'cart-items';
        let child =
            `
    <div class="cart-img-items">
    <img src=${el.img} alt="">
</div>
<div class="cart-details">
    <h2>${el.name}</h2>
    
    <button class="item_price">${el.price}</button>
</div>
<div class="cart-quantity">
    <div>
        <h2 class="dec">-</h2>
        <h2 class="item-count">${el.itemCount}</h2>
        <h2 class="inc">+</h2>
    </div>
    <p id="remove" class="removeCart">remove</p>
</div>
<div class="cart-price">
    <h3 class="price">${el.itemCount * el.price}</h3>
</div>
    `
        div.innerHTML = child;
        document.querySelector('.payment_cart').append(div);
    })

}


function recursive() {

    let removeBtn = document.querySelectorAll('.removeCart');

    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', function () {
            removeCardFromLocalStorage(i);
            removeBtn[i].parentElement.parentElement.remove();

        })
    }
}

recursive();



//remove items handler

function removeCardFromLocalStorage(index) {
    let localData = JSON.parse(localStorage.getItem('addtoCartData'));
    localData.splice(index, 1);

    // console.log('updatedCardData', updatedCardData);

    // appendPaymentData(updatedCardData);

    localStorage.setItem('addtoCartData', JSON.stringify(localData));
    recursive();

}


let decBtn = document.querySelectorAll('.dec');
let incBtn = document.querySelectorAll('.inc');
let quantity = document.querySelectorAll('.item-count');
let itemPrice = document.querySelectorAll('.item_price')
let singleCardTotalPrice = document.querySelectorAll('.price')

for (let i = 0; i < decBtn.length; i++) {
    decBtn[i].addEventListener('click', () => {
        if ((decBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML) > 1) {
            (decBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML) -= 1;
            let updatedItem = totalItem.map((item, index) => {
                if (index == i) {
                    item.itemCount = decBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML;
                    return item;
                }
                else {
                    return item;
                }
            })
            singleCardTotalPrice[i].innerHTML = itemPrice[i].innerHTML * decBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML
            localStorage.setItem('addtoCartData', JSON.stringify(updatedItem))
        }
    })
}

for (let i = 0; i < incBtn.length; i++) {
    incBtn[i].addEventListener('click', () => {
        if ((incBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML) < 10) {
            let incrementor = Number(incBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML);
            incBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML = incrementor + 1;
            let updatedItem = totalItem.map((item, index) => {
                if (index == i) {
                    item.itemCount = incBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTML;
                    return item;
                }
                else {
                    return item;
                }
            })
            singleCardTotalPrice[i].innerHTML = itemPrice[i].innerHTML * decBtn[i].parentElement.firstElementChild.nextElementSibling.innerHTMLI
            localStorage.setItem('addtoCartData', JSON.stringify(updatedItem))
        }
    })
}

//calculate total price






