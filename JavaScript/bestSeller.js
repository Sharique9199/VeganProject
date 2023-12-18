

import {popUp} from '../Cart/PopUp.js'
console.log(popUp);
import { header } from '../Header/header.js';

async function fetchData() {
    let res = await fetch('../Data/bestSeller.json');
    let data = await res.json()
    appendData(data.data)
    // console.log(data);

    // popUp Card Data

    let cardData=document.querySelectorAll('.addToBag');

    for(let cardBtn of cardData){
        cardBtn.addEventListener('click',function(){
            addToPopAndCardHandler(this)
        })
    }
}
fetchData()
function appendData(data) {
    // console.log(data);
    document.querySelector('#img-cart-container-1').innerHTML = "";
    data.map((elem) => {
        let div = document.createElement('div');
        div.className = 'main_content'
        // console.log(div);

        let child = `
        
        ${elem.discountPer && `<p class="discount">${elem.discountPer}% OFF</p>`}
        <img src=${elem.img} alt="" srcset="">
        <p class="desc">${elem.name}</p>
        <div class="review">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <b>${elem.review} review</b> 
        
        </div>
        <p >${elem.discountRupee && 
            `<del class="del-icon">$${elem.discountRupee}</del>`} <span class="price-show">$${elem.price}</span> ${elem.inStock?'<span class="in-stock">In Stock</span>':'<span class="sold-out">Sold Out</span>'}</p>        
       
            ${elem.inStock ? ` <select class="chosen-option">
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
        <button id="add-to-cart" class='addToBag'>Add To Card</button>`:`<button id="product-not-present">Notify Me When Available</button>`}
       

      `
        div.innerHTML = child;
        document.querySelector('#img-cart-container-1').append(div);
    })

}
// appendData()

// console.log("clicke");
//addToPopUpBagAnd Car function


let addItemToArr=JSON.parse(localStorage.getItem("addtoCartData"))  || [];
function addToPopAndCardHandler(data){ 
    // console.log(data.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText);
    let cartObj={
        img:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
        name:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
        itemCount:data.previousElementSibling.value,
        price:data.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText
    }
    localStorage.setItem('PopUpData',JSON.stringify(cartObj))
    // console.log(cartObj);

//total item add to acrd and store to local storage
addItemToArr.push(cartObj)
localStorage.setItem("addtoCartData",JSON.stringify(addItemToArr))
document.querySelector('#header').innerHTML=header();

    document.querySelector('#popup').innerHTML=popUp();
    document.querySelector("#popup-wraper").style.display="block"
    let crossIcon=document.querySelector('.crossIcon');
    crossIcon.addEventListener('click',function(){
        document.querySelector('#popup').innerHTML=popUp();
        document.querySelector("#popup-wraper").style.display="none"
    })
    // let crossIcon=document.querySelector('.crossIcon')

    document.getElementById('addToBag').addEventListener('click',()=>{
        window.location.href='../Cart/TotalListItem.html'
    })
    document.getElementById('continue_btn').addEventListener('click',()=>{
      
        document.querySelector("#popup-wraper").style.display="none"
    })

}