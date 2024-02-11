
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
    <div>
      ${cart.map((item, index) => `
        <div class="cartDiv  col-xl-4 col-lg-4 col-md-12 col-12">
          <img  src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
          <p>Adet: ${item.quantity}</p>
          <p>Fiyat: $${item.price}</p>
          <button onclick="removeSingleItem(${index})">Tek Bir Ürünü Sil</button>
        </div>`).join('')}
    </div>
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

