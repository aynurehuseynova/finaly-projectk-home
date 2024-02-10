// document.addEventListener('DOMContentLoaded', function () {
//     let productContainer = document.getElementById('shoes');

//     fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
//       .then(response => response.json())
//       .then(data => {
//         let bagsProducts = data.filter(item => item.category === 'Shoes');

//         bagsProducts.forEach(item => {
//           let cardDiv = document.createElement('div');
//           cardDiv.className = 'shoesBox col-xl-4 col-xl-4 col-md-6 col-sm-12 col-12';
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







// document.addEventListener('DOMContentLoaded', function () {
//   let productContainer = document.getElementById('shoes');
//   let products = [];

//   // Məhsulları yüklə
//   function loadProducts() {
//       fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
//           .then(response => response.json())
//           .then(data => {
//               products = data.filter(item => item.category === 'Shoes');
//               displayProducts(products);
//           })
//           .catch(error => console.error('Error fetching data:', error));
//   }

//   // Məhsulları göstər
//   function displayProducts(products) {
//       productContainer.innerHTML = '';
//       products.forEach(item => {
//           let cardDiv = document.createElement('div');
//           cardDiv.className = 'shoesBox col-xl-4 col-md-6 col-sm-12 col-12';
//           cardDiv.innerHTML = `
//               <div>
//                   <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
//                   <h5>${item.marka}</h5>
//                   <span>${item.name}</span>
//                   <p>$<a href="./sell.html">${item.price}</a></p>
//               </div>
//           `;
//           productContainer.appendChild(cardDiv);
//       });
//   }

//   // Məhsulları sırala
//   function sortProducts(sortType) {
//       if (sortType === 'priceAsc') {
//           products.sort((a, b) => a.price - b.price);
//       } 
//       else if (sortType === 'priceDesc') {
//           products.sort((a, b) => b.price - a.price);
//       }
//       displayProducts(products);
//   }

//   // Məhsulları yüklə və göstər
//   loadProducts();

//   // Sıralama seçimi üçün event listener əlavə et
 
//   document.getElementById('sortSelect').addEventListener('change', function () {
//       let selectedSortType = this.value;
//       sortProducts(selectedSortType);
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     let productContainer = document.getElementById('shoes');
//     let products = [];

//     // Məhsulları yüklə
//     function loadProducts() {
//         fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
//             .then(response => response.json())
//             .then(data => {
//                 products = data.filter(item => item.category === 'Shoes');
//                 displayProducts(products);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }

//     // Məhsulları göstər
//     function displayProducts(products) {
//         productContainer.innerHTML = '';
//         products.forEach(item => {
//             let cardDiv = document.createElement('div');
//             cardDiv.className = 'shoesBox col-xl-4 col-md-6 col-sm-12 col-12';
//             cardDiv.innerHTML = `
//                 <div>
//                     <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
//                     <h5>${item.marka}</h5>
//                     <span>${item.name}</span>
//                     <p>$<a href="./sell.html">${item.price}</a></p>
//                 </div>
//             `;
//             productContainer.appendChild(cardDiv);
//         });
//     }

//     // Məhsulları sırala
//     function sortProducts(sortType, sortBy) {
//         if (sortBy === 'brand' && sortType === 'asc') {
//             products.sort((a, b) => a.marka.localeCompare(b.marka));
//         } else if (sortBy === 'brand' && sortType === 'desc') {
//             products.sort((a, b) => b.marka.localeCompare(a.marka));
//         }
//         displayProducts(products);
//     }

//     // Məhsulları yüklə və göstər
//     loadProducts();

//     // Sıralama seçimi üçün event listener əlavə et
//     document.getElementById('sortBrand').addEventListener('change', function () {
//         let selectedSortType = this.value;
//         sortProducts(selectedSortType, 'brand');
//     });
// });




// document.addEventListener('DOMContentLoaded', function () {
//     let productContainer = document.getElementById('shoes');
//     let products = [];

//     // Məhsulları yüklə
//     function loadProducts() {
//         fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
//             .then(response => response.json())
//             .then(data => {
//                 products = data.filter(item => item.category === 'Shoes');
//                 displayProducts(products);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }

//     // Məhsulları göstər
//     function displayProducts(products) {
//         productContainer.innerHTML = '';
//         products.forEach(item => {
//             let cardDiv = document.createElement('div');
//             cardDiv.className = 'shoesBox col-xl-4 col-md-6 col-sm-12 col-12';
//             cardDiv.innerHTML = `
//                 <div>
//                     <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
//                     <h5>${item.marka}</h5>
//                     <span>${item.name}</span>
//                     <p>$<a href="./sell.html">${item.price}</a></p>
//                 </div>
//             `;
//             productContainer.appendChild(cardDiv);
//         });
//     }

//     // Məhsulları adına və ya markaya görə axtar
//     function searchByNameOrBrand(keyword) {
//         const filteredProducts = products.filter(item =>
//             item.name.toLowerCase().includes(keyword.toLowerCase())
//             || item.marka.toLowerCase().includes(keyword.toLowerCase())
//         );
//         displayProducts(filteredProducts);
//     }

//     // Məhsulları yüklə və göstər
//     loadProducts();

//     // Arama input'una event listener əlavə et
//     document.getElementById('searchInput').addEventListener('input', function () {
//         let searchKeyword = this.value;
//         searchByNameOrBrand(searchKeyword);
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    let productContainer = document.getElementById('shoes');
    let products = [];

    // Məhsulları yüklə
    function loadProducts() {
        fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
            .then(response => response.json())
            .then(data => {
                products = data.filter(item => item.category === 'Shoes');
                displayProducts(products);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Məhsulları göstər
    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(item => {
            let cardDiv = document.createElement('div');
            cardDiv.className = 'shoesBox col-xl-4 col-md-6 col-sm-12 col-12';
            cardDiv.innerHTML = `
                <div>
                    <a href="./sell.html?id=${item.id}"><img src="${item.image}" alt="cart"></a>
                    <h5>${item.marka}</h5>
                    <span>${item.name}</span>
                    <p>$<a href="./sell.html">${item.price}</a></p>
                </div>
            `;
            productContainer.appendChild(cardDiv);
        });
    }

    // Məhsulları adına və ya markaya görə axtar
    function searchByNameOrBrand(keyword) {
        const filteredProducts = products.filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
            || item.marka.toLowerCase().includes(keyword.toLowerCase())
        );
        displayProducts(filteredProducts);
    }

    // Məhsulları fiyata görə sırala
    function sortProducts(sortType) {
        if (sortType === 'priceAsc') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceDesc') {
            products.sort((a, b) => b.price - a.price);
        }
        displayProducts(products);
    }

    // Məhsulları yüklə və göstər
    loadProducts();

    // Arama input'una event listener əlavə et
    document.getElementById('searchInput').addEventListener('input', function () {
        let searchKeyword = this.value;
        searchByNameOrBrand(searchKeyword);
    });

    // Sıralama seçimi üçün event listener əlavə et
    document.getElementById('sortSelect').addEventListener('change', function () {
        let selectedSortType = this.value;
        sortProducts(selectedSortType);
    });
});
