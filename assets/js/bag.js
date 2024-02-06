// dark mode js

// let id = new URLSearchParams(window.location.search).get("id");
// const body = document.querySelector("body");

// fetch("http://localhost:3000/All/" + id)
//   .then((response) => response.json())
//   .then((item) => {
//     body.innerHTML = `
//        <div>
//       <img src="${item.image}" alt="cart">
//                    <h5>${item.marka}</h5>
//                    <span>${item.name}</span>
//                    <p>$${item.price}</p>
//         </div>
//         `;
//   });




// ///////////////////////////// bag filter method ///////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    let productContainer = document.getElementById('product');

    fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/Faionable')
      .then(response => response.json())
      .then(data => {
        let bagsProducts = data.filter(item => item.category === 'Bags');

        bagsProducts.forEach(item => {
          let cardDiv = document.createElement('div');
          cardDiv.className = 'boxDiv col-xl-4 col-xl-4 col-md-6 col-sm-12 col-12';
          cardDiv.innerHTML = `
          <div>
          <div class="image-container">
            <a href="./sell.html?id=${item.id}"><img  src="${item.image}" class="animated-image" alt="cart"></a>
            </div>
            <h5>${item.marka}</h5>
            <span>${item.name}</span>
            <p>$<a href="./sell.html">${item.price}</a></p>
        </div>
          `;
          productContainer.appendChild(cardDiv);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });