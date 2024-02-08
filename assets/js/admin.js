
// document.addEventListener('DOMContentLoaded', function () {
//     showSection('users'); // Varsayılan olarak kullanıcıları göster
//   });
  
//   function showSection(sectionId) {
//     const sections = document.querySelectorAll('.admin-section');
//     sections.forEach(section => {
//       section.style.display = 'none';
//     });
  
//     const selectedSection = document.getElementById(sectionId);
//     if (selectedSection) {
//       selectedSection.style.display = 'block';
//       updateSectionData(sectionId);
//     }
//   }
  
//   function updateSectionData(sectionId) {
//     // Örneğin, burada bir API'den veri çekme simülasyonu yapalım
//     switch (sectionId) {
//       case 'users':
//         fetchUserData(); // Kullanıcı verilerini güncelle
//         break;
//       case 'products':
//         fetchProductData(); // Ürün verilerini güncelle
//         break;
//       case 'orders':
//         fetchOrderData(); // Sipariş verilerini güncelle
//         break;
//       default:
//         console.error('Geçersiz bölüm IDsi:', sectionId);
//     }
//   }
  
//   function fetchUserDataFromMockAPI() {
//     return fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data')
//       .then(response => response.json())
//       .catch(error => {
//         console.error('API Hatası:', error);
//         return []; // Hata durumunda boş bir dizi döndürüyoruz
//       });
//   }
  
//   function fetchUserData() {
//     const usersTable = document.getElementById('usersTable');
  
//     // Kullanıcı verilerini mock API'den çek
//     fetchUserDataFromMockAPI().then(userData => {
//       // Tabloyu temizle
//       usersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>';
  
//       // Kullanıcı verilerini tabloya ekle
//       userData.forEach(user => {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td class="delete"><button onclick="deleteUser(${user.id})">Delete</button></td>`;
//         usersTable.appendChild(row);
//       });
//     });
//   }
  
//   function deleteUser(userId) {
//     // Kullanıcıyı silmek için bir DELETE isteği gönder
//     fetch(`https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data/${userId}`, {
//       method: 'DELETE'
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log(`Kullanıcı (ID: ${userId}) başarıyla silindi.`);
//           // Kullanıcı silindikten sonra tabloyu güncelle
//           fetchUserData();
//         } else {
//           console.error('Kullanıcı silme hatası:', response.statusText);
//         }
//       })
//       .catch(error => {
//         console.error('Kullanıcı silme hatası:', error);
//       });
//   }
  
//   function fetchProductData() {
//     // Ürün verilerini çekip tabloyu güncelleyen fonksiyon
//     // Benzer bir şekilde ürün verilerini alabilir ve tabloyu güncelleyebilirsiniz
//   }
  
//   function fetchOrderData() {
//     // Sipariş verilerini çekip tabloyu güncelleyen fonksiyon
//     // Benzer bir şekilde sipariş verilerini alabilir ve tabloyu güncelleyebilirsiniz
//   }
  













// script.js

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
  
  // ... (diğer fonksiyonlar)
  
  


  function fetchOrderData() {
    // Sipariş verilerini çekip tabloyu güncelleyen fonksiyon
    // Benzer bir şekilde sipariş verilerini alabilir ve tabloyu güncelleyebilirsiniz
  }
  