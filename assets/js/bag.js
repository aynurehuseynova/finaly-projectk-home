  document.addEventListener('DOMContentLoaded', function () {
    let productContainer = document.getElementById('product');
    let products = [];

    // Çantaları yükle
    function loadBags() {
        fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
            .then(response => response.json())
            .then(data => {
                products = data.filter(item => item.category === 'Bags');
                displayBags(products);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Çantaları göster
    function displayBags(products) {
        productContainer.innerHTML = '';
        products.forEach(item => {
            let cardDiv = document.createElement('div');
            cardDiv.className = 'bagBox col-xl-4 col-md-6 col-sm-12 col-12';
            cardDiv.innerHTML = `
                <div>
                    <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
                    <h5>${item.marka}</h5>
                    <span>${item.name}</span>
                    <p>$<a href="./bag-sell.html">${item.price}</a></p>
                </div>
            `;
            productContainer.appendChild(cardDiv);
        });
    }

    // Çantaları adına veya markasına göre ara
    function searchByNameOrBrand(keyword) {
        const filteredBags = products.filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
            || item.marka.toLowerCase().includes(keyword.toLowerCase())
        );
        displayBags(filteredBags);
    }

    // Çantaları fiyata göre sırala
    function sortBags(sortType) {
        if (sortType === 'priceAsc') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceDesc') {
            products.sort((a, b) => b.price - a.price);
        }
        displayBags(products);
    }

    // Çantaları yükle ve göster
    loadBags();

    // Arama input'una event listener ekle
    document.getElementById('searchInput').addEventListener('input', function () {
        let searchKeyword = this.value;
        searchByNameOrBrand(searchKeyword);
    });

    // Sıralama seçimi için event listener ekle
    document.getElementById('sortSelect').addEventListener('change', function () {
        let selectedSortType = this.value;
        sortBags(selectedSortType);
    });
});
