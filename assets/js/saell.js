
const body = document.querySelector("body");
const productDetailsContainer = document.getElementById("products");

const id = new URLSearchParams(window.location.search).get("id");

fetch("https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable/" + id)
  .then((response) => response.json())
  .then((item) => {
    productDetailsContainer.innerHTML =
      ` 
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
          <div class="image-container">
          <img src="${item.image}" alt="cart" class="img-fluid animated-image">
        </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <div class="productsName">
              <h5>${item.marka}</h5>
              <span>${item.name}</span>
              <span>${item.details}</span>
              <span>${item.country}</span>
              <p>$${item.price}</p>
              <span class="offer">Do you just love this but it's not the right price for you? Sign up for a discount alert and we'll email you if this item goes on discount.</span>
              <div class= "buttons">
                <button class="basket" onclick="addToBasket(${item.id},'${item.name}', ${item.price}, '${item.image}')">ADD TO CART</button>
                <button onclick="addToWishlist(${item.id},'${item.name}', ${item.price}, '${item.image}')"><i class="fa-solid fa-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
        `;
  })
  .catch((error) => {
    console.error("An error occurred while retrieving data:", error);
    productDetailsContainer.innerHTML = "<p>An error occurred while loading product details.</p>";
  });

function addToBasket(itemId, itemName, itemPrice,itemImage) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productItem = cart.find(item => item.id === itemId);

  if (productItem) {
    productItem.quantity = (productItem.quantity || 1) + 1;
  } else {
    cart.push({
      image:itemImage,
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(`Added to cart: ${itemName}`);
}

function addToWishlist(itemId, itemName ,itemPrice,itemImage) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let productItem = wishlist.find(item => item.id === itemId);

  if (productItem) {
    alert("The product is already added to favorites!");
  } else {
    wishlist.push({
      image:itemImage,
      id: itemId,
      name: itemName,
      price: itemPrice,
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log(`Added to favorites: ${itemName}`);
  }
}






































//   const body = document.querySelector("body");
// const productDetailsContainer = document.getElementById("products");

// const id = new URLSearchParams(window.location.search).get("id");

// fetch("https://655ddd779f1e1093c59a0b08.mockapi.io/form/" + id)
//   .then((response) => response.json())
//   .then((item) => {
//     productDetailsContainer.innerHTML =
//       ` <div>
//         <img src="${item.image}" alt="cart">
//         <div class="productsName">
//         <h5>${item.marka}</h5>
//         <span>${item.name}</span>
//         <p>$${item.price}</p>
//         <div class= "buttons">
//         <button onclick="addToBasket">ADD TO BASKET</button>
//         <button onclick="addToWishlist"><i class="fa-regular fa-heart"></i></button>
//         </div>
//       </div>
//     `;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//     productDetailsContainer.innerHTML = "<p>Error loading product details.</p>";
//   });



