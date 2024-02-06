// let id = new URLSearchParams(window.location.search).get("id");
// const body = document.querySelector("body");

// fetch("http://localhost:3000/All/" + id)
//   .then((response) => response.json())
//   .then((item) => {
//     body.innerHTML = `
//        <div>
//       <img src="${item.image}" alt="cart">
//                    <h5>${item.marka}</h5>
//                    <span>${item.name}</span>
//                    <p>$${item.price}</p>
//         </div>
//         `;
//   });



// ...





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
              <div class= "buttons">
                <button class="basket" onclick="addToBasket(${item.id},'${item.name}', ${item.price})">SEPETE EKLE</button>
                <button onclick="addToWishlist(${item.id},'${item.name}')"><i class="fa-solid fa-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
        `;
  })
  .catch((error) => {
    console.error("Veri alınırken hata oluştu:", error);
    productDetailsContainer.innerHTML = "<p>Ürün detayları yüklenirken hata oluştu.</p>";
  });

function addToBasket(itemId, itemName, itemPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productItem = cart.find(item => item.id === itemId);

  if (productItem) {
    productItem.quantity = (productItem.quantity || 1) + 1;
  } else {
    cart.push({
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(`Sepete eklendi: ${itemName}`);
}

function addToWishlist(itemId, itemName) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let productItem = wishlist.find(item => item.id === itemId);

  if (productItem) {
    alert("Ürün zaten favorilere ekli!");
  } else {
    wishlist.push({
      id: itemId,
      name: itemName
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log(`Favorilere eklendi: ${itemName}`);
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



  