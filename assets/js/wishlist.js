const wishlistContainer = document.getElementById("wishlist");

document.addEventListener('DOMContentLoaded', function () {
  displayWishlist();
});

function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Ürün zaten istek listesinde mi kontrol et
  const existingItemIndex = wishlist.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    console.log("Ürün zaten istek listesinde.");
    return;
  }

  // Ürünü istek listesine ekle
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  console.log("Ürün istek listesine eklendi.");
  displayWishlist();
}

function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>İstek listeniz boş.</p>";
    return;
  }

  wishlistContainer.innerHTML = `
    <h2>İstek Listeniz</h2>
    <div class="row">
      ${wishlist.map((item, index) => `
        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
          <p>Fiyat: $${item.price}</p>
          <button onclick="removeFromWishlist(${index})">İstekten Kaldır</button>
        
        </div>`).join('')}
    </div>
  `;
}

function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  console.log("Ürün istek listesinden kaldırıldı.");
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

  console.log("Ürün sepete eklendi.");
  displayWishlist();
  displayCart();
}
