const product = document.getElementById("product");
const loadMore = document.getElementById("loadMore")
let limit = 4;
let page = 1 ;


function getProduct() {
    axios.get(`https://655ddd779f1e1093c59a0b08.mockapi.io/form?page=${page}&limit=${limit}`)
    .then((res) => {
        db = res.data;
        db.map((item) => {
            const box = document.createElement("div")
        box.className = "boxDiv col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
        box.innerHTML = `
        <div>
<a href="./sell.html"><img src="${item.image}" alt="cart"> </a>
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

loadMore.addEventListener("click",getProduct)
getProduct()


const darkModeToggle = document.getElementById('darkModeToggle');
const savedTheme = localStorage.getItem('theme');
document.body.classList.toggle(savedTheme || 'light-mode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
});

// Dark/light modu uygulamak için çağrılan fonksiyon
function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark-mode');
}