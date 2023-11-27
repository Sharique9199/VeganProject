

export let popUp = () => {
  let localCardData = JSON.parse(localStorage.getItem('PopUpData'));
  // console.log('localCardData', localCardData);
  return `<div id="popup-wraper">
          <div class=popupContainer>
  
              <div class="crossIcon">
                  <i class="fa-solid fa-x" style="cursor: pointer;"></i>
            
              </div>
              <div class=popUpDiv>
                <div class=imgAndDesDiv>
                  <div class=imgDiv>
                    <img src=${localCardData.img} alt="lemonImg" />
                  </div>
                  <div class=descDiv>
                    <h3>${localCardData.name}</h3>
                    <div class="countAndPrice">
                      <p style="background-color: rgb(234,154,68);">${localCardData.itemCount}</p>
                    <p style="background-color: green;">${localCardData.price}</p>
                    </div>
                  </div>
                </div>
                <div class=bothBtnDiv>
                  <button id="continue_btn">Continue Shoping</button>
                  <button id="addToBag">View Cart</button>
                </div>
              </div>
            </div>
      </div>
  `

  }


