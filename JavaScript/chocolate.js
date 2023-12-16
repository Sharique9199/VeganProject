
import { popUp } from '../Cart/PopUp.js'
import { header } from '../Header/header.js';


let availableItem = `  <select class="chosen-option">
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
<button id="add-to-cart" class='addToBag'>Add To Card</button>`

async function fetchData() {
    let data = await fetch("../Data/chocolate.json");
    let result = await data.json();
    console.log(result);

    appendData(result.data);

    let cardData = document.querySelectorAll('.addToBag');
    console.log('cardData', cardData);
    for (let cardBtn of cardData) {
        console.log("Clicked me");
        cardBtn.addEventListener('click', function () {
            addToPopAndCardHandler(this)
        })
    }
}
fetchData();
function appendData(data) {
    console.log(data);
    document.querySelector("#img-cart-container-1").innerHTML = "";
    data.map((elem) => {
        let div = document.createElement("div");
        div.className = "main_content";
        let child =
            `
       ${elem.discountPer && ` <p class="discount">${elem.discountPer}% OFF</p>`}
        <img src=${elem.img}>
        <p class="desc">${elem.name}</p>
        <div class="review"> 
        ${elem.review && `  
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <b>${elem.review} review</b> 
      
      
     `} </div>
        <p>${elem.discountRupee && `<del>$${elem.discountRupee}</del>`} <span class="price-show">$${elem.price}</span>  ${elem.stock ? `<span class="in-stock">in stock</span>` : `<span class="sold-out">Sold Out</span>`}</p>
        
      ${elem.stock ? availableItem : `<button id="product-not-present">Notify Me When Available</button>`}
        
        `
        div.innerHTML = child;
        document.querySelector("#img-cart-container-1").append(div);


    })
}





let addItemToArr = JSON.parse(localStorage.getItem("addtoCartData")) || [];
console.log("addItemToArr",addItemToArr);
function addToPopAndCardHandler(data) {
    // console.log(data.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText);
    let cartObj = {
        img: data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
        name: data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
        itemCount: data.previousElementSibling.value,
        price: data.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerHTML
    }
    console.log("price",data.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerHTML);
    localStorage.setItem('PopUpData', JSON.stringify(cartObj))
    // console.log(cartObj);

    //total item add to acrd and store to local storage
    let duplicateData=addItemToArr.find((el)=>{

        console.log("add Sharique",el);
        return el.name==cartObj.name;
        console.log("Duplicate Array",duplicateData);
    })
    

    if(!duplicateData){
        addItemToArr.push(cartObj)
        localStorage.setItem("addtoCartData", JSON.stringify(addItemToArr))
        header();
        document.querySelector('#header').innerHTML = header();
    }

    else {
        alert("Item already added to cart !!!!!")
    }
   

    document.querySelector('#popup').innerHTML = popUp();
    document.querySelector("#popup-wraper").style.display = "block"
    let crossIcon = document.querySelector('.crossIcon');
    crossIcon.addEventListener('click', function () {
        document.querySelector('#popup').innerHTML = popUp();
        document.querySelector("#popup-wraper").style.display = "none"
    })
    // let crossIcon=document.querySelector('.crossIcon')

    document.getElementById('addToBag').addEventListener('click', () => {
        window.location.href = '../Cart/TotalListItem.html'
    })
    document.getElementById('continue_btn').addEventListener('click', () => {

        document.querySelector("#popup-wraper").style.display = "none"
    })

}