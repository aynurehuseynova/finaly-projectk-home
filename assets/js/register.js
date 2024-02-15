
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
            } else {
                document.getElementById('passwordError').style.display = 'none'; // Hata mesajını gizle
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
            axios.post('https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data', user)
                .then(response => {
                    console.log('Kullanıcı başarıyla kaydedildi:', response.data);
    
                    // Kullanıcı kaydedildikten sonra ismini local storage'a ve sessionStorage'a kaydet
                    localStorage.setItem('currentUser', JSON.stringify(response.data));
                    sessionStorage.setItem('currentUser', JSON.stringify(response.data));
    
                    // Kullanıcı kaydedildikten sonra ana sayfaya yönlendir
                    window.location.href = 'home.html';
                })
                .catch(error => {
                    console.error('Kullanıcı kaydında hata oluştu:', error);
                });
        }
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
          let button = document.querySelectorAll(".login-button");
          button.textContent = currentUser.name;
        }
    });
    