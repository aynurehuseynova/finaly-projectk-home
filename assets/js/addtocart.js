const body = document.querySelector("body");
const cartContainer = document.getElementById("cart");

document.addEventListener('DOMContentLoaded', function () {
  displayCart();
});

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Sepetiniz boş.</p>";
    return;
  }

  cartContainer.innerHTML = `
    <h2>Sepetiniz</h2>
    <ul>
      ${cart.map(item => `
        <li>
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
          <p>Adet: ${item.quantity}</p>
          <p>Fiyat: $${item.price}</p>
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
