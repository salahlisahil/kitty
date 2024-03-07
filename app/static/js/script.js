'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);





const productList = document.getElementById('grid-list');
products.forEach(product => {
  const productElement = document.createElement('li');
  productElement.innerHTML = `
    <div data-product-id=${product.id} class="product-card">

      <div class="card-banner img-holder" style="--width: 360; --height: 360;">
        <img src=${product.img1} width="360" height="360" loading="lazy"
          alt="Commodo leo sed porta" class="img-cover default">
        <img src=${product.img2} width="360" height="360" loading="lazy"
          alt="Commodo leo sed porta" class="img-cover hover">

        <button id="button" data-product-id=${product.id} class="card-action-btn" aria-label="add to card" title="Add To Card">
          <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div class="card-content">

        <div class="wrapper">
          <div class='${product.class}'>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
          </div>

          <span class="span">(${product.id})</span>
        </div>
        <h3 class="h3">
          <a  class="card-title">${product.name}</a>
        </h3>
        <data class="card-price" value="15">${'$' + product.price}</data>
      </div>
      
    </div>
    `
  productList.appendChild(productElement);


  /*Show card in new page*/

  const allCardTitle = document.querySelectorAll(".card-title")

  allCardTitle.forEach(title => {
    title.addEventListener('click', function () {
      const productId = parseInt(title.closest('.product-card').dataset.productId);
      const product = products.find(item => item.id === productId);
      if (product) {
        // Yeni bir pencere aç ve ürün detaylarını içeren HTML dosyasını göster
        const newWindow = window.open(product.href, '_blank');
        newWindow.document.write(`
    

    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./assets/css/style.css">
            <link rel="stylesheet" href="../../templates/components/products/product.css">

              <link
                href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
                rel="stylesheet">

                <title>Best Seller</title>

              </head>

              <body>

                <!--
                - #PRODUCT
            -->

                <section class="section product " id="shop" aria-label="product">
                  <div class="header">
                    <h2 class="h2 section-title">
                      <span class="span">Best</span> Seller
                    </h2>
                  </div>
                  <div class="bottom">
                    <div class="container">



                      <ul class="grid-list">

                        <li>
                          <div class="product-card">

                            <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                              <img src="${product.img1}" width="360" height="360" loading="lazy"
                                alt="Commodo leo sed porta" class="img-cover default">
                                <img src="${product.img2}" width="360" height="360" loading="lazy"
                                  alt="Commodo leo sed porta" class="img-cover hover">


                                </div>

                                <div class="card-content">

                                  <div class="wrapper">
                                    <div class='${product.class}'>
                                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                                    </div>

                                    <span class="span">(${product.id})</span>
                                  </div>

                                  <h3 class="h3">
                                    <a href="#" class="card-title">Commodo leo sed porta</a>
                                  </h3>

                                  <data class="card-price" value="15">$15.00</data>

                                </div>

                            </div>
                        </li>

                      </ul>



                    </div>
                    <div class="about">
                      <h2 class="h2 section-title">
                        <span class="span">About</span> Product
                      </h2>
                      <ul>

                        <li><b>Complete –</b> provides adequate amounts of all the required nutrients </li>
                        <li><b>Balanced –</b> the nutrients are present in the correct proportions</li>
                        <li><b>Digestible –</b> your pet is able to digest the food and absorb the nutrients</li>
                        <li><b>Palatable –</b> appealing enough to be eaten</li>
                        <li><b>Safe –</b> free of toxins or anything which could harm a pet</li>




                      </ul>



                    </div>
                  </div>

                </section>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
              </body>

            
            `);
        newWindow.document.close();
      }
    })
  })
});



/*-----------------Show basket-------------*/

const basketButton = document.getElementById("basketButton");
const basketProducts = document.getElementById("basketProducts");

basketButton.addEventListener("click", () => {
  basketProducts.classList.toggle("show");
});

/*---------------Basket--------------------*/

const addToCartButtons = document.querySelectorAll('#button');
const cartList = document.getElementById("basket");
const total = document.getElementById("totalPrice")


let cart = [];

document.addEventListener("click", event => {
  let totalPrice = 0

  if (event.target.id === "button") {
    const productId = event.target.getAttribute('data-product-id');
    const existingProduct = cart.find(item => item.id == productId);
    if (existingProduct) {
      cartList.innerHTML = ""
      existingProduct.quantity++;
    } else {
      const productToAdd = products.find(product => product.id == productId);
      console.log(productToAdd)

      cartList.innerHTML = ""
      cart.push({
        id: productToAdd.id,
        name: productToAdd.name,
        price: productToAdd.price,
        img1: productToAdd.img1,
        img2: productToAdd.img2,
        quantity: 1
      });
    }



  } else if (event.target.id === 'plus') {
    const productId = parseInt(event.target.closest('.product-card').dataset.productId);
    const element = cart.find(item => item.id == productId)
    element.quantity++

  } else if (event.target.id === 'minus') {
    const productId = parseInt(event.target.closest('.product-card').dataset.productId);
    const element = cart.find(item => item.id == productId)

    if (element.quantity > 1) {
      element.quantity--
    } else if (element.quantity == 1) {
      cart = cart.filter(item => item.id !== productId)
      total.innerHTML = ''
    }

  }
  const badge = document.getElementById("badge")
  badge.innerHTML = cart.length
  cartList.innerHTML = ""
  cart.forEach(item => {
    const cartElement = document.createElement('div')
    cartElement.classList.add('container_basket');
    cartElement.innerHTML = `
    <div data-product-id=${item.id} class="product-card">
        <div>
          <div class="card-banner img-holder" style="--width: 360; --height: 360;">
            <img src=${item.img1} width="360" height="360" loading="lazy" alt="Img1" class="img-cover default">
           <img src=${item.img2} width="360" height="360" loading="lazy" alt="Img2" class="img-cover hover">
          </div>
       <div class="quantityWrapper">
               <div class="i"  ><i id="minus" class="fa-solid fa-minus"></i></div>
               <span id="quantity" class="quantity">${item.quantity}</span>
               <div class="i" ><i id="plus" class="fa-solid fa-plus"></i></div>
              </div>
             
          <div class="cardTitle">
          <a href="${item.href}" >${item.name}</a>
         </div>
         <p class="card-price">${'$' + item.price * item.quantity}</p>
      
    </div>`;

    cartList.appendChild(cartElement);

  });
  cart.forEach(item => {

    totalPrice += item.price * item.quantity;
    const priceElement = document.createElement("div")
    priceElement.classList.add("priceTotal")
    priceElement.innerHTML = `<p>Total price : $${totalPrice}</p>
    
     <a ><button id="button-77" class="button-77" role="button">Buy Products</button></a>`
    total.innerHTML = ''
    total.appendChild(priceElement)
  })
  const buyProduts = document.getElementById("button-77")

  buyProduts.addEventListener('click', () => {
    const newPage = window.open('buy.html', '_blank');
    newPage.document.write(`
  <html lang="en">

<head>
    <meta charset="UTF-8">
    <link
        href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
        rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/buyProduct.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Buy Product</title>
    
</head>

<body>
    <div id="wrapper">
        <div class="wrapper">
            <div class="login_box">
                <div class="login-header">
                    <h1>Buy Product</h1>
                </div>
    
                <div class="all-inputs">
                    <div class="input_box">
                        <input type="text" id="name" class="input-field" required>
                        <label for="name" class="label">Your Name</label>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="phoneNumber" class="input-field" required>
                        <label for="phoneNumber" class="label">Phone Number</label>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="cardNumber" class="input-field" required>
                        <label for="cardNumber" class="label">Card Number</label>
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="date" class="input-field" required>
                        <label for="date" class="label">Expiration Date</label>
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="cvv" class="input-field" required>
                        <label for="cvv" class="label">CVV</label>
                        <i class="fa-regular fa-address-card"></i>
                    </div>

                    <div class="input_box">
                        <button id="moreDetails" class="input-field">Place for more details</button>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                </div>
                <div id ="details"class="all-inputs details"> 
                    <div class="input_box">
                        <input type="email" id="email" class="input-field" required >
                        <label for="email" class="label">Email</label>
                        <i class="fa-solid fa-at"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="city" class="input-field" required>
                        <label for="city" class="label">Your City</label>
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="street" class="input-field" required>
                        <label for="street" class="label">Your Street</label>
                        <i class="fa-solid fa-street-view"></i>
                    </div>
                   
                </div>
                <div class="input_price">
                <div>Total price</div>
                <div class="div"></div>
                <div>$${totalPrice}</div>
                </div>
                
       
                <div class="input_box">
                    <input type="submit" class="input-submit" value="Buy Product">
                </div>
    
            </div>
        </div>
    </div>
    <script>
    const details = document.getElementById("details");
    const moreDetails = document.getElementById("moreDetails");
    moreDetails.addEventListener('click', function () {
        details.classList.toggle('hidden');

        if (details.classList.contains('hidden')) {
            details.classList.remove('details');
        } else {
            details.classList.add('details');
        }
    });
</script>
</body>

</html>
  `)
    newWindow.document.close();
  })




})


