let productAvailable = `<select class="chosen-option">
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
</select><button id="add-to-cart">Add To Card</button>`;

let soldOutInnerStyle='style=${background-color:}'

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
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        appendData(data[i].data, i);
    }
}
fetchData()

function appendData(data, i) {
    console.log(data);
    document.querySelector(`#img-cart-container-${i + 1}`).innerHTML = "";
    data.map((elem) => {
        let div = document.createElement('div');
        div.className = 'main_content';

        let child = `
        <p class="discount">10% OFF</p>
        <img src=${elem.img}>
                <p class="desc">${elem.desc}</p>
                <div id="review">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    
                        <p>${elem.review} review</p>
                    </div>
                <p>${elem.discountPer && 
                    `<del>$${elem.discountPer}</del>`} $${elem.price} ${elem.inStock?'<span class="in-stock">In Stock</span>':'<span class="sold-out">Sold Out</span>'}</p>
                ${elem.inStock?productAvailable:'<button id="product-not-present">Product Not Available</button>'}
                
        `

        div.innerHTML = child;

        document.querySelector(`#img-cart-container-${i + 1}`).append(div)

    })

}
