document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        // FormData'dan JSON objesi oluştur
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // JSON verisini Mock API'ye gönder
        sendToMockAPI(jsonData);

        // Formu temizle
        contactForm.reset();
    });
});

function sendToMockAPI(data) {
    fetch('https://65c88862a4fbc162e111d4fa.mockapi.io/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Message sent successfully:', responseData);
        // İsteğe göre başka işlemler yapabilirsiniz
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}
