

async function fetchData(){
    let res=await fetch('../Data/bestSeller.json');
    let data=await res.json();
    // console.log(data);
    
    appendData(data.data)
    console.log(data);
}
fetchData()
function appendData(data){
    console.log(data);
    document.querySelector('#img-cart-container-1').innerHTML="";
    data.map((elem)=>{
      let div= document.createElement('div');
      div.className='main_content'
      console.log(div);

      let child=`
      <img src=${elem.img}>
  <p>${elem.name}</p>
  <div id="review">
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      
          <p>${elem.review} review</p>
      </div>
  <p>$29.95 <span>in stock</span></p>
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
  
      `
      div.innerHTML=child;
    document.querySelector('#img-cart-container-1').append(div);
    })
    
}
// appendData()

console.log("clicke");