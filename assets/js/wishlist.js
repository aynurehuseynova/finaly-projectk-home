const wishlistContainer = document.getElementById("wishlist");

document.addEventListener('DOMContentLoaded', function () {
  displayWishlist();
});

function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Ürün zaten istek listesinde mi kontrol et
  const existingItemIndex = wishlist.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    console.log("The product is already in the wish list.");
    return;
  }

  // Ürünü istek listesine ekle
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  console.log("The product has been added to the wish list.");
  displayWishlist();
}

function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wish list is empty.</p>";
    return;
  }

  wishlistContainer.innerHTML = `
    <h2>Your Wish List</h2>
    <div class="row">
      ${wishlist.map((item, index) => `
        <div class="wishlistCart  col-xl-4 col-lg-4 col-md-12 col-12">
          <img src="${item.image}" alt="${item.name}">
        <div class="text"><p>${item.name}</p>
          <span>Price: $${item.price}</span>
          
          <button onclick="removeFromWishlist(${index})"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        </div>`).join('')}
    </div>
  `;
}

function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  console.log("The product has been removed from the wish list.");
  displayWishlist();
}

function moveToCart(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const selectedItem = wishlist[index];
  wishlist.splice(index, 1);


  if (existingItemIndex !== -1) {
    // Eğer ürün sepette varsa sadece miktarını artır
    cart[existingItemIndex].quantity++;
  } else {
    // Eğer ürün sepette yoksa, yeni bir öğe olarak ekleyin
    selectedItem.quantity = 1;
    cart.push(selectedItem);
  }

  // Güncellenmiş listeleri localStorage'e kaydet
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("The product has been added to the cart.");
  displayWishlist();
  displayCart();
}
