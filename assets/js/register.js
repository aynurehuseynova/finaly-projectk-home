// document.addEventListener('DOMContentLoaded', function () {
//   const registerForm = document.getElementById('registerForm');

//   registerForm.addEventListener('submit', function (event) {
//       event.preventDefault();

//       // Kullanıcı bilgilerini al
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const passwords = document.getElementById('password').value;
//       // Kullanıcı nesnesi oluştur
//       const user = {
//           name: name,
//           email: email,
//           password: password,
//           password: passwords
//       };

//       // Kullanıcıyı kaydetmek için bir API çağrısı yapabilirsiniz
//       // Bu örnekte mock bir API kullanıyoruz
//       saveUserToApi(user);
//   });

//   function saveUserToApi(user) {
//       // Burada gerçek bir API'ye kullanıcıyı kaydetme kodları yer almalıdır
//       // Örneğin, axios veya fetch kullanarak bir POST isteği gönderebilirsiniz
//       // Bu örnekte bir mock API kullanıyoruz
//       axios.post('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data', user)
//           .then(response => {
//               console.log('User registered successfully:', response.data);

//               // Kullanıcı kaydedildikten sonra ana sayfaya yönlendir
//               window.location.href = 'home.html';
//           })
//           .catch(error => {
//               console.error('Error registering user:', error);
//           });
//   }

//   function fetchUserDataFromMockAPI(userData) {
//       usersTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Email</th></tr>';

//       // Kullanıcı verilerini tabloya ekle
//       userData.forEach(user => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>`;
//           usersTable.appendChild(row);
//       });
//   }
// });















// document.addEventListener('DOMContentLoaded', function () {
//     const registerForm = document.getElementById('registerForm');

//     registerForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Kullanıcı bilgilerini al
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         const passwords = document.getElementById('confirmPassword').value;

//         // Kullanıcı nesnesi oluştur
//         const user = {
//             name: name,
//             email: email,
//             password: password,
//             password: passwords
//         };

//         // Kullanıcıyı kaydetmek için bir API çağrısı yapabilirsiniz
//         // Bu örnekte mock bir API kullanıyoruz
//         saveUserToApi(user);
//     });

//     function saveUserToApi(user) {
//         // Burada gerçek bir API'ye kullanıcıyı kaydetme kodları yer almalıdır
//         // Örneğin, axios veya fetch kullanarak bir POST isteği gönderebilirsiniz
//         // Bu örnekte bir mock API kullanıyoruz
//         axios.post('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data', user)
//             .then(response => {
//                 console.log('User registered successfully:', response.data);

//                 // Kullanıcı kaydedildikten sonra ismini local storage'a kaydet
//                 localStorage.setItem('currentUser', response.data.name);

//                 // Kullanıcı kaydedildikten sonra ana sayfaya yönlendir
//                 window.location.href = 'home.html';
//             })
//             .catch(error => {
//                 console.error('Error registering user:', error);
//             });
//     }
    
//     // Home sayfasında kullanıcı adını göster
//     const currentUser = localStorage.getItem('currentUser');
//     if (currentUser) {
//         document.getElementById('userName').innerText = `Welcome, ${currentUser}!`;
//     }
// });











document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Kullanıcı bilgilerini al
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Şifreleri kontrol et
        if (password !== confirmPassword) {
            document.getElementById('passwordError').style.display = 'block';
            return;
        }

        // Kullanıcı nesnesi oluştur
        const user = {
            name: name,
            email: email,
            password: password,
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

                // Kullanıcı kaydedildikten sonra ismini local storage'a kaydet
                localStorage.setItem('currentUser', response.data.name);

                // Kullanıcı kaydedildikten sonra ana sayfaya yönlendir
                window.location.href = 'home.html';
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    }
});