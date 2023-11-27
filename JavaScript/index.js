
import { popUp } from "../Cart/PopUp.js";
import { header } from "../Header/header.js";
// import { header } from '../Header/header.js';

// document.querySelector('#popup').innerHTML = popUp();

let productAvailable = `<select class="chosen-option">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
<button id="add-to-cart" class="card-btn">Add To Card</button>`;



function abc() {
    console.log('hello');
}

let soldOutInnerStyle = 'style=${background-color:}'

let carosalItem = document.getElementsByClassName('slider-item');

let carosalCount = 0;

let id;

function carosalDisplay() {

    for (let i = 0; i < carosalItem.length; i++) {
        carosalItem[i].style.display = 'none'
    }

    if (carosalCount == carosalItem.length) {
        carosalCount = 0;
    }

    carosalItem[carosalCount++].style.display = 'block';

    id = setTimeout(carosalDisplay, 5000)

}

carosalDisplay();
document.getElementById('backward').addEventListener('click', () => {
    clearTimeout(id);
    carosalCount -= 2;
    if (carosalCount == -1) {
        carosalCount = 4;
    }

    carosalDisplay();
})

document.getElementById('forward').addEventListener('click', () => {
    clearTimeout(id);
    carosalDisplay();
})

// Data appending part JS...

async function fetchData() {

    let res = await fetch('../Data/homePage.json')
    let data = await res.json();
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        appendData(data[i].data, i);
    }
    const addToCart = document.querySelectorAll('.card-btn');
    for (let cardBtn of addToCart) {
        cardBtn.addEventListener('click', function () {
            ShowToPopUpCart(this);
            totalItem1Card(this);
        
        })
    }


}



function ShowToPopUpCart(card) {
    // console.log("Sharique",card.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText);
    let CartItemObj = {
        img: card.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
        name: card.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        itemCount: card.previousElementSibling.value,
        price: card.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText,
        

    }
    // console.log(card.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText);

    localStorage.setItem("PopUpData", JSON.stringify(CartItemObj));


    // total item store in localStorage


    document.querySelector('#popup').innerHTML = popUp();
    document.getElementById('popup-wraper').style.display = "block";

    let crossIcon = document.querySelector('.crossIcon');

    crossIcon.addEventListener('click', () => {
        console.log(66666);
        document.querySelector('#popup').innerHTML = popUp();
        document.querySelector('#popup-wraper').style.display = "none";
        
    })
    document.getElementById('addToBag').addEventListener('click',()=>{
        window.location.href='../Cart/TotalListItem.html'
    })
}

let totoalItemArr = JSON.parse(localStorage.getItem('addtoCartData')) || [];
function totalItem1Card(data) {

    let totalItemObj = {
        img: data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
        name: data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        itemCount: data.previousElementSibling.value,
        price: data.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText,
       

    }
    
    totoalItemArr.push(totalItemObj);
    localStorage.setItem("addtoCartData", JSON.stringify(totoalItemArr));
    header();
    document.getElementById('header').innerHTML = header();

}


fetchData();

function appendData(data, i) {
    // console.log(data);
    document.querySelector(`#img-cart-container-${i + 1}`).innerHTML = "";
    data.map((elem) => {
        let div = document.createElement('div');
        div.className = 'main_content';

        let child = `
       ${elem.discountPer && `<p class="discount">${elem.discountPer}% OFF</p>`}
        <img src=${elem.img}>
                <p class="desc">${elem.desc}</p>
                <div class="review">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    
                        <p>${elem.review} review</p>
                    </div>
                <p >${elem.discountRupee &&
            `<del class="del-icon">$${elem.discountRupee}</del>`} <span class="price-show">${elem.price}</span> ${elem.inStock ? '<span class="in-stock">In Stock</span>' : '<span class="sold-out">Sold Out</span>'}</p>
                ${elem.inStock ? productAvailable : `<button id="product-not-present">Notify Me When Available</button>
                `}
                
        `

        div.innerHTML = child;

        document.querySelector(`#img-cart-container-${i + 1}`).append(div)

    })




}


// window.addEventListener('scroll', () => {
//     // console.log(scrollY);
//     if (scrollY > 65) {
//         document.getElementById('header-part').classList.add("header_sticky")
//         console.log(document.getElementById('header-part'));
//         console.log('greate than 65');
//     }
// })





