const axios = window.axios;
const productsContainer = document.getElementById("allProduct");

function getProduct() {
    axios.get("https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable")
    .then((res) => {
        let products = res.data;
        displayProducts(products);
    });
}

function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(item => {
        const box = document.createElement("div");
        box.className = "boxDivSearch col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12";
        box.innerHTML = `
            <div>
                <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
                <h5>${item.marka}</h5>
                <span>${item.name}</span>
                <p>$<a href="./sell.html">${item.price}</a></p>
            </div>
        `;
        productsContainer.appendChild(box);
    });
}

function searchAndSort() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const sortSelect = document.getElementById('sortSelect');
    const sortType = sortSelect.value;

    axios.get("https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable")
    .then((res) => {
        let products = res.data;

        // Filter by name or brand
        products = products.filter(item =>
            item.name.toLowerCase().includes(searchInput) || item.marka.toLowerCase().includes(searchInput)
        );

        // Sort by price
        if (sortType === 'priceAsc') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceDesc') {
            products.sort((a, b) => b.price - a.price);
        }

        displayProducts(products);
    });
}

// Initial load
getProduct();

// Event listeners
document.getElementById('searchInput').addEventListener('input', searchAndSort);
document.getElementById('sortSelect').addEventListener('change', searchAndSort);




