document.addEventListener('DOMContentLoaded', function () {
    showSection('users'); // Varsayılan olarak kullanıcıları göster
  });
  
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
      updateSectionData(sectionId);
    }
  }
  
  function updateSectionData(sectionId) {
    switch (sectionId) {
      case 'users':
        fetchUserData();
        break;
      case 'products':
        fetchProductData(); // Ürün verilerini güncelle
        break;
      case 'orders':
        fetchOrderData();
        break;
      default:
        console.error('Geçersiz bölüm IDsi:', sectionId);
    }
  }
  
  function fetchUserDataFromMockAPI() {
    return fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data')
      .then(response => response.json())
      .catch(error => {
        console.error('API Hatası:', error);
        return []; // Hata durumunda boş bir dizi döndürüyoruz
      });
  }
  
  function fetchUserData() {
    const usersTable = document.getElementById('usersTable');
  
    // Kullanıcı verilerini mock API'den çek
    fetchUserDataFromMockAPI().then(userData => {
      // Tabloyu temizle
      usersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>';
  
      // Kullanıcı verilerini tabloya ekle
      userData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td class="delete"><button onclick="deleteUser(${user.id})">Delete</button></td>`;
        usersTable.appendChild(row);
      });
    });
  }
  
  function deleteUser(userId) {
    // Kullanıcıyı silmek için bir DELETE isteği gönder
    fetch(`https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data/${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log(`Kullanıcı (ID: ${userId}) başarıyla silindi.`);
          // Kullanıcı silindikten sonra tabloyu güncelle
          fetchUserData();
        } else {
          console.error('Kullanıcı silme hatası:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Kullanıcı silme hatası:', error);
      });
  }


  function fetchProductDataFromMockAPI() {
    return fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
      .then(response => response.json())
      .catch(error => {
        console.error('API Hatası:', error);
        return [];
      });
  }
  
  function fetchProductData() {
    const productsTable = document.getElementById('productsTable');
  
    fetchProductDataFromMockAPI().then(productData => {
      productsTable.innerHTML = '<tr><th>ID</th><th>Image</th><th>Marka</th><th>Name</th><th>Price</th><th>Action</th></tr>';
  
      productData.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.id}</td><td><img src="${product.image}" alt="${product.title}" width="50"></td><td>${product.marka}</td><td>${product.name}</td><td>${product.price}</td><td class="delete"><button onclick="deleteProduct(${product.id})">Delete</button></td>`;
        productsTable.appendChild(row);
      });
    });
  }
  
  function deleteProduct(productId) {
    fetch(`https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable/${productId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log(`Ürün (ID: ${productId}) başarıyla silindi.`);
          fetchProductData();
        } else {
          console.error('Ürün silme hatası:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Ürün silme hatası:', error);
      });
  }
  
  function fetchUserData() {
    const usersTable = document.getElementById('usersTable');
  
    fetchUserDataFromMockAPI().then(userData => {
      usersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>';
  
      userData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td class="delete"><button onclick="deleteUser(${user.id})">Delete</button></td>`;
        usersTable.appendChild(row);
      });
    });
  }
  
  function deleteUser(userId) {
    fetch(`https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data/${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log(`Kullanıcı (ID: ${userId}) başarıyla silindi.`);
          fetchUserData();
        } else {
          console.error('Kullanıcı silme hatası:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Kullanıcı silme hatası:', error);
      });
  }
  
// API ye mehsul post etmek


function showAddProductForm() {
    const addProductForm = document.getElementById('addProductForm');
    addProductForm.style.display = 'block';
  
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const productMarka = document.getElementById('productMarka').value;
      const productName = document.getElementById('productName').value;
      const productPrice = document.getElementById('productPrice').value;
      const productImageInput = document.getElementById('productImage');
      const productDetails = document.getElementById('productDetails').value;
      const productCountry = document.getElementById('productCountry').value;
  
      // Dosya yükleme işlemini ele al
      const productImageFile = productImageInput.files[0];
      const formData = new FormData();
      formData.append('marka', productMarka);
      formData.append('name', productName);
      formData.append('price', productPrice);
      formData.append('image', productImageFile);
      formData.append('details', productDetails);
      formData.append('country', productCountry);
  
      addProductToMockAPI(formData);
  
      // Formu sıfırla ve gizle
      productForm.reset();
      addProductForm.style.display = 'none';
    });
  }
  
  function addProductToMockAPI(productData) {
    fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable', {
      method: 'POST',
      body: productData
    })
      .then(response => response.json())
      .then(data => {
        console.log('Yeni ürün başarıyla eklendi:', data);
        fetchProductData(); // Ekledikten sonra tabloyu güncelle
      })
      .catch(error => {
        console.error('Ürün ekleme hatası:', error);
      });
  }
  
  // function fetchOrderData() {
  //   const ordersTable = document.getElementById('ordersTable');
  
  //   fetchOrderDataFromMockAPI().then(orderData => {
  //     ordersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Total</th></tr>';
  
  //     orderData.forEach(order => {
  //       const row = document.createElement('tr');
  //       row.innerHTML = `<td>${order.id}</td><td>${order.name}</td><td>${order.image}</td><td>${order.price}</td><td>${order.quantity}</td><td>${order.total}</td>`;
  //       ordersTable.appendChild(row);
  //     });
  //   });
  // }
  
  // function fetchOrderDataFromMockAPI() {
  //   return fetch('https://65c88862a4fbc162e111d4fa.mockapi.io/order-product')
  //     .then(response => response.json())
  //     .catch(error => {
  //       console.error('Sipariş API Hatası:', error);
  //       return [];
  //     });
  // }
  // document.addEventListener('DOMContentLoaded', function () {
  //   fetchOrderData();
  // });

  
  document.addEventListener('DOMContentLoaded', function () {
    fetchOrderData();
});

function fetchOrderData() {
    const ordersTable = document.getElementById('ordersTable');

    fetchOrderDataFromMockAPI().then(orderData => {
        ordersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>';

        orderData.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${order.id}</td><td>${order.name}</td><td>${order.image}</td><td>${order.price}</td><td>${order.quantity}</td><td>${order.total}</td><td>
                <button class="accept-btn" onclick="processOrder(${order.id}, 'accepted', this)">Siparişi Kabul Et</button>
                <button class="reject-btn" onclick="processOrder(${order.id}, 'rejected', this)">Siparişi Reddet</button>
                <button class="prepare-btn" onclick="processOrder(${order.id}, 'preparing', this)">Hazırlanıyor</button>
            </td>`;
            ordersTable.appendChild(row);

            // Ekstra: Her bir siparişin içindeki ürünleri kontrol et
            if (order.items) {
                order.items.forEach(item => {
                    console.log(`Ürün ID: ${item.id}, Ad: ${item.name}, Fiyat: ${item.price}, Adet: ${item.quantity}`);
                });
            }
        });
    });
}

function processOrder(orderId, status, button) {
    // Sipariş durumunu güncelle
    updateOrderStatus(orderId, status).then(() => {
        // Sipariş durumunu tabloda güncelle
        updateOrderRowStyle(button, status);
    });
}

function updateOrderStatus(orderId, status) {
    // Burada orderId ve status'u kullanarak siparişi güncelleyebilirsiniz
    // Örneğin, API'ye güncelleme isteği gönderebilirsiniz
    // Bu örnek sadece bir Promise döner
    return new Promise(resolve => {
        // API isteği burada olmalı
        // Bu örnek sadece 1 saniye bekler
        setTimeout(() => {
            console.log(`Sipariş #${orderId} ${status} durumuna güncellendi.`);
            resolve();
        }, 1000);
    });
}

function updateOrderRowStyle(button, status) {
    const row = button.closest('tr');
    row.style.backgroundColor = getStatusColor(status);
}

function getStatusColor(status) {
    switch (status) {
        case 'accepted':
            return 'lightgreen';
        case 'rejected':
            return 'lightcoral';
        case 'preparing':
            return 'lightyellow';
        default:
            return '';
    }
}

function fetchOrderDataFromMockAPI() {
    return fetch('https://65c88862a4fbc162e111d4fa.mockapi.io/order-product')
        .then(response => response.json())
        .catch(error => {
            console.error('Sipariş API Hatası:', error);
            return [];
        });
}
