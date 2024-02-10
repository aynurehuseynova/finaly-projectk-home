const body = document.querySelector("body");
const cartContainer = document.getElementById("cart");

document.addEventListener('DOMContentLoaded', function () {
  displayCart();
});

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = `
    <h2>Sepetiniz</h2>
    <ul>
      ${cart.map((item, index) => `
        <li>
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
          <p>Adet: ${item.quantity}</p>
          <p>Fiyat: $${item.price}</p>
          <button onclick="removeSingleItem(${index})">Tek Bir Ürünü Sil</button>
        </li>`).join('')}
    </ul>
    <p>Toplam: $${calculateTotal(cart)}</p>
    <button onclick="clearCart()">Sepeti Temizle</button>
  `;
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

function removeSingleItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Seçilen index'teki ürünün bir adetini sepetten kaldır
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  // Güncellenmiş sepeti localStorage'e kaydet
  localStorage.setItem("cart", JSON.stringify(cart));

  // Sepeti güncelle
  displayCart();
}

// const wishlistContainer = document.getElementById("wishlist");

// document.addEventListener('DOMContentLoaded', function () {
//   displayWishlist();
// });

// function addToWishlist(product) {
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//   // Ürün zaten istek listesinde mi kontrol et
//   const existingItemIndex = wishlist.findIndex(item => item.id === product.id);

//   if (existingItemIndex !== -1) {
//     console.log("Ürün zaten istek listesinde.");
//     return;
//   }

//   // Ürünü istek listesine ekle
//   wishlist.push(product);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));

//   console.log("Ürün istek listesine eklendi.");
//   displayWishlist();
// }

// function displayWishlist() {
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//   if (wishlist.length === 0) {
//     wishlistContainer.innerHTML = "<p>İstek listeniz boş.</p>";
//     return;
//   }

//   wishlistContainer.innerHTML = `
//     <h2>İstek Listeniz</h2>
//     <ul>
//       ${wishlist.map((item, index) => `
//         <li>
//           <img src="${item.image}" alt="${item.name}">
//           <p>${item.name}</p>
//           <p>Fiyat: $${item.price}</p>
//           <button onclick="removeFromWishlist(${index})">İstekten Kaldır</button>
        
//         </li>`).join('')}
//     </ul>
//   `;
// }

// function removeFromWishlist(index) {
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//   wishlist.splice(index, 1);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));

//   console.log("Ürün istek listesinden kaldırıldı.");
//   displayWishlist();
// }

// function moveToCart(index) {
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const selectedItem = wishlist[index];
//   wishlist.splice(index, 1);


//   if (existingItemIndex !== -1) {
//     // Eğer ürün sepette varsa sadece miktarını artır
//     cart[existingItemIndex].quantity++;
//   } else {
//     // Eğer ürün sepette yoksa, yeni bir öğe olarak ekleyin
//     selectedItem.quantity = 1;
//     cart.push(selectedItem);
//   }

//   // Güncellenmiş listeleri localStorage'e kaydet
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   localStorage.setItem("cart", JSON.stringify(cart));

//   console.log("Ürün sepete eklendi.");
//   displayWishlist();
//   displayCart();
// }
