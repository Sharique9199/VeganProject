 import {popUp} from '../Cart/PopUp.js'
 import { header } from '../Header/header.js';
//  console.log(popUp);

async function fetchData() {
   try {
    let res = await fetch('../Data/chesse.json');
    let data = await res.json();
    dataAppend(data.data)

    let addToBagData=document.querySelectorAll('.popUpCart')
    for(let addToBagBtn of addToBagData){
      addToBagBtn.addEventListener('click',function(){
        // console.log("clicked me popUp Cart");
        addToBagAndpopupHandler(this)
      })
    }
    
   } catch (error) {
    console.log(error);
   }
}
fetchData();

function dataAppend(data){
    document.querySelector('#img-cart-container-1').innerHTML='';
    data.map((elem)=>{
      let div=  document.createElement('div');
      div.className='main_content';
      let child =
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
                </div>`}
                <p>${elem.discountRupee && `<del>$${elem.discountRupee}`}</del><span class="price-show">$${elem.price}</span> ${elem.inStock ? ` <span class="in-stock">in stock</span>`: `<span class="sold-out">Sold out</span>`}</p>
                
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
            <button id="add-to-cart" class="popUpCart">Add To Card</button>` :`<button id="product-not-present">Notify Me When Available</button>`}
      `

      div.innerHTML=child;
      document.querySelector('#img-cart-container-1').append(div)
    })

}

function addToBagAndpopupHandler(data){
  // console.log(data);
  // console.log(data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src);

  let BagArr=JSON.parse(localStorage.getItem('addtoCartData'))||[];
  let cardObj={
    img:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src,
    name:data.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
    itemCount:data.previousElementSibling.value,
    price:data.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.innerText
  }
  localStorage.setItem('PopUpData',JSON.stringify(cardObj))
  document.querySelector('#header').innerHTML=header();
// console.log(cardObj);
  //store bag also we also use localStorage
  BagArr.push(cardObj);
  localStorage.setItem('addtoCartData',JSON.stringify(BagArr));
  document.getElementById('popup').innerHTML=popUp();
  document.querySelector('#popup-wraper').style.display='block';



  document.getElementById('addToBag').addEventListener('click',()=>{
    // console.log("view Cart Clicked");
    window.location.href='../Cart/TotalListItem.html'
  })

  document.getElementById('continue_btn').addEventListener('click',()=>{
  
    document.querySelector("#popup-wraper").style.display="none"
})
}





