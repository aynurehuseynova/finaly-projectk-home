document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    if (email === '' || password === '') {
        if (email === '') {
            document.querySelector('.email .error').style.display = 'block';
        } else {
            document.querySelector('.email .error').style.display = 'none';
        }

        if (password === '') {
            document.querySelector('.password .error').style.display = 'block';
        } else {
            document.querySelector('.password .error').style.display = 'none';
        }
    } else {


        // Yönlendirme (Ana sayfaya git)
        window.location.href = 'home.html';
        
        // modal logic
        const modalWrapper = document.querySelector('.modal-wrapper');
        modalWrapper.style.display = 'none';
    }
});

document.querySelector('.reset').addEventListener('click', function() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'none';
});
