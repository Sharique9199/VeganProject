import { popUp } from "../Cart/PopUp.js";
import { header } from "../Header/header.js";
// console.log(popUp);
// document.getElementById('popup').innerHTML=popUp();

async function fetchData(){
    let res=await fetch('../Data/meatSeafood.json');
    let data=await res.json();
    for(let i=0;i<data.length;i++){
        appendData(data[i].data);
    }

    const carBtn=document.querySelectorAll('.addToBag');
    // console.log("222222222222222",carBtn);
    for (const btn of carBtn) {
        btn.addEventListener('click',function(){
            popUpAndAddToCard(this);
            
        })
        
    }
}
fetchData();


function appendData(data,i) {
    // console.log(data);

    document.querySelectorAll('.CardContainer').innerHTML='';
    data.map((ele)=>{
        let div=document.createElement('div');
        div.className='main_content';

        let child=
        `
        <div class="main_content">
        ${ele.discountPer && `<p class="discount">${ele.discountPer}%</p>`}
        <img src= ${ele.img}>
        <p class="desc">${ele.name}</p>
        <div class="review">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <b>${ele.review} review</b> 
        
        </div>
        <p><span class="price-show">$${ele.price}</span>  ${ele.stock ? `<span class="in-stock">in stock</span>`:`<span class="sold-out">Sold Out</span>`}</p>
        
        ${ele.stock ? `<select class="chosen-option">
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
    <button id="add-to-cart" class="addToBag">Add To Card</button>` :`<button id="product-not-present">Notify me when availabel</button>`}
        </div>
        `

        div.innerHTML=child;
        document.querySelector('.CardContainer').append(div)
    })

}


let itemAddedToArr=JSON.parse(localStorage.getItem('addtoCartData'))||[]
function popUpAndAddToCard(data){
    // console.log(data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src);


  let cartObj={
    img:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
    name:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
    price:data.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText,
    itemCount:data.previousElementSibling.value
  }
//    itemAddedToArr.push(cartObj);
//    console.log('item added',itemAddedToArr);
   localStorage.setItem('PopUpData',JSON.stringify(cartObj))

   document.querySelector('#popup').innerHTML=popUp();
   document.querySelector('#popup-wraper').style.display='block'

   document.querySelector('.crossIcon').addEventListener('click',()=>{
   document.querySelector('#popup').innerHTML=popUp();
   document.querySelector('#popup-wraper').style.display='none'
   })

   document.querySelector('#continue_btn').addEventListener('click',()=>{
    document.querySelector('#popup').innerHTML=popUp();
    document.querySelector('#popup-wraper').style.display='none'
    })

    //set item as a localstorage 
    let dupicateData=itemAddedToArr.find((elem)=>{
        return cartObj.name==elem.name;
    })

    if(!dupicateData){
        itemAddedToArr.push(cartObj);
        localStorage.setItem('addtoCartData',JSON.stringify(itemAddedToArr));
        document.querySelector('#header').innerHTML=header();
    
    }
    else{
        alert("Item is already added to cart !!!!!!")
    }


    document.querySelector('#addToBag').addEventListener('click',()=>{
        window.location.href='../Cart/TotalListItem.html'
    })
   
}