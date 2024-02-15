const product = document.getElementById("product");
const loadMore = document.getElementById("loadMore")
let limit = 4;
let page = 1;


function getProduct() {
    axios.get(`https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable?page=${page}&limit=${limit}`)
        .then((res) => {
            db = res.data;
            db.map((item) => {
                const box = document.createElement("div")
                box.className = "boxDiv col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                box.innerHTML = `
        <div>
            <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
            <h5>${item.marka}</h5>
            <span>${item.name}</span>
            <p>$<a href="./sell.html">${item.price}</a></p>
            </div>
        `
                product.appendChild(box)
            });
            page++;
        });
}

loadMore.addEventListener("click", getProduct)
getProduct()

// UserName header dusmesi
const userbtn = document.querySelector('.login-button')
const checkUser = () => {
    loggedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (loggedUser) {
        userbtn.textContent = loggedUser.name

    }
}

const logOut = () => {
    loggedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (loggedUser) {
        localStorage.removeItem("currentUser")
        window.location.href = "home.html"; // Index.html sayfasına yönlendirme
    }
}

const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', logOut);
}


checkUser()


