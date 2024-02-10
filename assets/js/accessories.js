// document.addEventListener('DOMContentLoaded', function () {
//     let productContainer = document.getElementById('products');

//     fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
//       .then(response => response.json())
//       .then(data => {
//         let bagsProducts = data.filter(item => item.category === 'Accessories');

//         bagsProducts.forEach(item => {
//           let cardDiv = document.createElement('div');
//           cardDiv.className = 'boxDiv col-xl-4 col-xl-4 col-md-6 col-sm-12 col-12';
//           cardDiv.innerHTML = `
//           <div>
//             <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
//             <h5>${item.marka}</h5>
//             <span>${item.name}</span>
//             <p>$<a href="./sell.html">${item.price}</a></p>
//         </div>
//           `;
//           productContainer.appendChild(cardDiv);
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   });


  document.addEventListener('DOMContentLoaded', function () {
    let productContainer = document.getElementById('products');
    let products = [];

    // Aksesuarları yükle
    function loadAccessories() {
        fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
            .then(response => response.json())
            .then(data => {
                products = data.filter(item => item.category === 'Accessories');
                displayAccessories(products);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Aksesuarları göster
    function displayAccessories(products) {
        productContainer.innerHTML = '';
        products.forEach(item => {
            let cardDiv = document.createElement('div');
            cardDiv.className = 'accessoryBox col-xl-4 col-md-6 col-sm-12 col-12';
            cardDiv.innerHTML = `
                <div>
                    <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
                    <h5>${item.marka}</h5>
                    <span>${item.name}</span>
                    <p>$<a href="./accessory-sell.html">${item.price}</a></p>
                </div>
            `;
            productContainer.appendChild(cardDiv);
        });
    }

    // Aksesuarları adına veya markasına göre ara
    function searchByNameOrBrand(keyword) {
        const filteredAccessories = products.filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
            || item.marka.toLowerCase().includes(keyword.toLowerCase())
        );
        displayAccessories(filteredAccessories);
    }

    // Aksesuarları fiyata göre sırala
    function sortAccessories(sortType) {
        if (sortType === 'priceAsc') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceDesc') {
            products.sort((a, b) => b.price - a.price);
        }
        displayAccessories(products);
    }

    // Aksesuarları yükle ve göster
    loadAccessories();

    // Arama input'una event listener ekle
    document.getElementById('searchInput').addEventListener('input', function () {
        let searchKeyword = this.value;
        searchByNameOrBrand(searchKeyword);
    });

    // Sıralama seçimi için event listener ekle
    document.getElementById('sortSelect').addEventListener('change', function () {
        let selectedSortType = this.value;
        sortAccessories(selectedSortType);
    });
});
