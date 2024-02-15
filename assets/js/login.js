document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        if (email === '') {
            document.getElementById('emailError').style.display = 'block';
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (password === '') {
            document.getElementById('passwordError').style.display = 'block';
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }
    } else {
        // Giriş bilgilerini kontrol et
        checkLoginCredentials(email, password);
    }
});

function checkLoginCredentials(email, password) {
    // Mock API URL
    const apiUrl = 'https://655ddd779f1e1093c59a0b08.mockapi.io/istifadeci-data';

    // Mock API'den kullanıcıları al
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            // Girilen bilgilere sahip bir kullanıcı var mı kontrol et
            const authenticatedUser = users.find(user =>
                user.email === email && user.password === password
            );

            if (authenticatedUser) {
                // Giriş bilgileri doğruysa ana sayfaya yönlendir
                window.location.href = 'home.html';
                localStorage.setItem("loggedin", JSON.stringify(authenticatedUser))

            } else {
                // Hata mesajı göster veya kayıt sayfasına yönlendir
                alert('Invalid login information. Please register or check your email/password.');
                // Kayıt sayfasına yönlendir
                window.location.href = 'registration.html';
            }
        })
        .catch(error => console.error('Error retrieving users:', error));
}