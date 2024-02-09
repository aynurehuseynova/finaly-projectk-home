

// register.js

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Kullanıcı bilgilerini al
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Kullanıcı nesnesi oluştur
      const user = {
        name: name,
        email: email,
        password: password
      };
  
      // Kullanıcıyı kaydetmek için bir API çağrısı yapabilirsiniz
      // Bu örnekte mock bir API kullanıyoruz
      saveUserToApi(user);
    });
  
    function saveUserToApi(user) {
      // Burada gerçek bir API'ye kullanıcıyı kaydetme kodları yer almalıdır
      // Örneğin, axios veya fetch kullanarak bir POST isteği gönderebilirsiniz
      // Bu örnekte bir mock API kullanıyoruz
      axios.post('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data', user)
        .then(response => {
          console.log('User registered successfully:', response.data);
  
          // Kullanıcı kaydedildikten sonra admin paneldeki tabloyu güncelle
          // Bu işlem için admin panelde kullanılan fonksiyonu çağırabilirsiniz
          fetchUserDataFromMockAPI(response.data);
        })
        .catch(error => {
          console.error('Error registering user:', error);
        });
    }
  
    function fetchUserDataFromMockAPI(userData) {
        usersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Email</th></tr>';
  
        // Kullanıcı verilerini tabloya ekle
        userData.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>`;
          usersTable.appendChild(row);
        });
    }
  });
  


