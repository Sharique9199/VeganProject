


let checkoutData=JSON.parse(localStorage.getItem('addtoCartData'));
console.log('checkoutData',checkoutData);

CheckoutDataHandler(checkoutData);


function CheckoutDataHandler(data) {
    console.log('11111111111111111111111111',data);

    data.map((elem)=>{

        let div=document.createElement('table');
        div.className='scroll_data';

        let child=
        `
        <tr>
        <td class="scroll_img_cart">
            <img src=${elem.img}>
            
    
        </td>
        <td id="itemCount">${elem.itemCount}</td>
        <td class="scroll_details_cart">
            <p>${elem.name}</p>
        </td>
        <td class="scroll_price_cart">
            <p>$${elem.price}</p>
        </td>
    </tr>
        
        `

        div.innerHTML=child;
        document.querySelector(".table_data").append(div)


    })

}