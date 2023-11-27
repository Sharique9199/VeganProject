import {popUp} from '../Cart/PopUp.js'
// console.log("popUp",popUp);




async function fetchData(){
    let res=await fetch('../Data/baked.json')
    let data=await res.json();
    appendData(data.data)
    let addItems=document.querySelectorAll(".addToCard")
    // console.log(btn);
    for(let cardBtn of addItems){
        cardBtn.addEventListener("click",function(){
            AddItemsToPopUp(this)
        })
    }
}
fetchData()
function appendData(data){
    document.querySelector('#img-cart-container-1').innerHTML="";
    data.map((elem)=>{
        let div=document.createElement('div');
        div.className='main_content'
        let child=
        `
        ${elem.discountPer && `<p class="discount">${elem.discountPer}% OFF</p>`}
                <img src=${elem.img} alt="" srcset="">
                <p class="desc">${elem.desc}</p>
                ${elem.review && `
                <div class="review">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <b>${elem.review} review</b> 
                
                </div>
                `}
                <p>${elem.discountRupee && `<del>${elem.discountRupee}</del>`} <span class="price-show">$${elem.price}</span>  ${elem.inStock ? `<span class="in-stock">in stock</span>` :`<span class="sold-out">sold Out</span>`}</p>
                
                ${elem.inStock ? `<select class="chosen-option">
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
            <button id="add-to-cart" class="addToCard">Add To Card</button>` :`<button id="product-not-present">Notify Me When Available</button>`}
        `
        div.innerHTML=child;
        document.querySelector('#img-cart-container-1').append(div)
    })
}

let AddItemToArr=JSON.parse(localStorage.getItem('addtoCartData'))||[];
function AddItemsToPopUp(data){
  
    let CartItemObj={
        img:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
        name:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
        price:data.previousElementSibling.previousElementSibling.firstElementChild.innerText,
        itemCount:data.previousElementSibling.value
    }
    // AddItemToArr.push(CartItemObj)
    // console.log(AddItem  
    localStorage.setItem("PopUpData",JSON.stringify(CartItemObj))

    //totalItem Store in localStorage
    AddItemToArr.push(CartItemObj)
    localStorage.setItem('addtoCartData',JSON.stringify(AddItemToArr));

    document.getElementById("popup").innerHTML=popUp();
    document.querySelector('#popup-wraper').style.display="block"
   let cutIcon= document.querySelector('.crossIcon');
   cutIcon.addEventListener('click',()=>{
    document.getElementById("popup").innerHTML=popUp();
    document.querySelector('#popup-wraper').style.display="none"
   })
   

   let viewCart=document.querySelector("#addToBag");
   viewCart.addEventListener('click',()=>{
    window.location.href='../Cart/TotalListItem.html'
   })
   let continueBtn=document.querySelector('#continue_btn');
   continueBtn.addEventListener('click',()=>{
    document.getElementById("popup").innerHTML=popUp();
    window.location.href='../index.html'
    // console.log("Sharique Juli");
   })
}
