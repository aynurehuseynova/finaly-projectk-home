document.addEventListener('DOMContentLoaded', function () {
    let productContainer = document.getElementById('product');

    fetch('https://655ddd779f1e1093c59a0b08.mockapi.io/form')
      .then(response => response.json())
      .then(data => {
        let bagsProducts = data.filter(item => item.category === 'Accessories');

        bagsProducts.forEach(item => {
          let cardDiv = document.createElement('div');
          cardDiv.className = 'boxDiv col-xl-4 col-xl-4 col-md-6 col-sm-12 col-12';
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
      })
      .catch(error => console.error('Error fetching data:', error));
  });