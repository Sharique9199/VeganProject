






export function header() {
    let toalCardData = JSON.parse(localStorage.getItem("addtoCartData")) || [];
    // console.log("Hello", toalCardData);

    return `
<div class= 'haeder-container'>
<div class="margue-part">
    <div>
        <i class="fa-solid fa-phone-volume"></i>
        <p>833-407-0747</p>
    </div>
    <div>
        <marquee behavior="" direction="">Vegan Burgers the Whole Family will Love &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;FREE SHIPPING on ALL orders over $99
            Hungry Planet Plant-Based Meats Available NOW!</marquee>
        

    </div>
    <div>
        <p>Best Online Vegan Store/Grocery - 2005-2023</p>
    </div>
</div>

<header id="header-part">
    <div id="logo_img">
        <a href="#Home">
            <img src="https://shimmering-queijadas-d64ba9.netlify.app/static/media/logo.1e84cfd1ab93101e319e.png"
            alt="logo_img">
        </a>
      
    </div>
    <div id="header-category">
        <a href="../index.html">
            <p>Home</p>
        </a>
        <a href="../Cart/shopCategory.html">
            <p>Shop By Category</p>
        </a>
        <a href="">
            <p>About Us</p>
        </a>
        <a href="">
            <p>Contact Us</p>
        </a>
        <a href="">
            <p>Rewards</p>
        </a>
    </div>
    <div id="search-bar">
        <input type="text" placeholder="Search,product,brands,etc....">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div id="header-singup-cart">
        <i class="fa-regular fa-user"></i>
        <p id="cart_count">${toalCardData.length}</p>
        <i class="fa-solid fa-cart-shopping"></i>
    </div>
</div>    

    `
}