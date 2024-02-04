let id = new URLSearchParams(window.location.search).get("id");
const body = document.querySelector("body");

fetch("http://localhost:3000/All/" + id)
  .then((response) => response.json())
  .then((item) => {
    body.innerHTML = `
       <div>
      <img src="${item.image}" alt="cart">
                   <h5>${item.marka}</h5>
                   <span>${item.name}</span>
                   <p>$${item.price}</p>
        </div>
        `;
  });