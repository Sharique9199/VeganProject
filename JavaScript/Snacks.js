


async function appendData(){
    let res=await fetch('../Data/snacks.json');
    let data=await res.json();
    showDataHandler(data.data)
}
appendData();


function showDataHandler(data){
    console.log("Sharique",data);

    document.querySelector('#img-cart-container-1').innerHTML=""

    data.map((elem)=>{
        let div=document.createElement('div');
        div.className='main_content';
        let child=
        `   
        <div class="main_content">
            ${elem.discountPer && `<p class="discount">%</p>`}
            <img src=${elem.img}>
            <p class="desc">${elem.name}</p>
            <div class="review">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <b> ${elem.review}review</b> 
            
            </div>
            <p><span class="price-show">$${elem.price}</span>  ${elem.stock ? `<span class="in-stock">in stock</span>`:`<span class="sold-out">Sold Out</span>`}</p>
            
            <select class="chosen-option">
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
            <button id="add-to-cart">Add To Card</button>
            </div>
        `
        div.innerHTML=child;
        document.querySelector('#img-cart-container-1').append(div);

    })
}