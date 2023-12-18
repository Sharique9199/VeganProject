import { popUp } from "../Cart/PopUp.js";
// document.getElementById('popup').innerHTML=popUp();

async function fetchData(){
    let res=await fetch('../Data/meatSeafood.json');
    let data=await res.json();
    for(let i=0;i<data.length;i++){
        appendData(data[i].data);
    }

    const carBtn=document.querySelectorAll('.addToBag');
    // console.log(carBtn);
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
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
        <option value="1">5</option>
        <option value="1">6</option>
        <option value="1">7</option>
        <option value="1">8</option>
        <option value="1">9</option>
        <option value="1">10</option>
    </select>
    <button id="add-to-cart" class="addToBag">Add To Card</button>` :`<button id="product-not-present">Notify me when availabel</button>`}
        </div>
        `

        div.innerHTML=child;
        document.querySelector('.CardContainer').append(div)
    })

}
function popUpAndAddToCard(data){

    document.querySelector('#popup').innerHTML=popUp();
    // console.log("11111111111111",popUp);
    document.querySelector('#popup-wraper').style.dispaly="block";
    

}