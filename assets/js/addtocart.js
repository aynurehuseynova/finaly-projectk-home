
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
    <tbody class="row">
      ${cart.map((item, index) => `
        <tr class="cartDiv col-12">
        <td><img  src="${item.image}" alt="${item.name}"> </td>
         <td><h6>${item.name}</h6></td>
         <td><span>Custom: ${item.quantity}</span></td>
        <td><p >Price: $${item.price}</p></td>
        <td><button onclick="removeSingleItem(${index})"><i class="fa-regular fa-trash-can"></i></button></td>
          </tr> `).join('')}
        <div class="totalPrice">
    <p>Total: $${calculateTotal(cart)}</p>
    <button onclick="completeOrder()">Complete the order</button>
    </div>
  </tbody>`;
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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

function completeOrder() {
  // Sepet verisini al
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Sipariş verisini hazırla
  const orderData = {
    items: cart,
    total: calculateTotal(cart)
  };

  // Siparişi mock API'ye gönder 
  fetch('https://65c88862a4fbc162e111d4fa.mockapi.io/order-product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Sipariş başarıyla tamamlandı:', data);
      // Sipariş tamamlandıktan sonra sepeti temizle
      localStorage.removeItem("cart");
      displayCart();
    })
    .catch(error => {
      console.error('Sipariş tamamlama hatası:', error);
    });
}
