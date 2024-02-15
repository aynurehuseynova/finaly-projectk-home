document.addEventListener('DOMContentLoaded', init);

function init() {
    fetchOrderData();
}

function fetchOrderData() {
    const ordersTable = document.getElementById('ordersTable');

    fetchOrderDataFromMockAPI().then(orderData => {
        renderOrdersTable(orderData, ordersTable);
    });
}

function renderOrdersTable(orderData, table) {
    table.innerHTML = '<tr><th>ID</th><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>';

    orderData.forEach(order => {
        const row = createOrderRow(order);
        table.appendChild(row);
    });
}

function createOrderRow(order) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${order.id}</td><td>${order.items.map(item => `${item.name}`).join('<br>')}</td><td>${order.items.map(item => `${item.price}$`).join('<br>')}</td><td>${order.items.map(item => `${item.quantity}`).join('<br>')}</td><td>${order.total}$</td><td>
        <button class="delete-btn" data-order-id="${order.id}" onclick="deleteOrder(this)">Delete</button>
    </td>`;
    return row;
}



function deleteOrder(button) {
    const orderId = button.getAttribute('data-order-id');

    // Siparişi silme işlemi (API'ye DELETE isteği gönderilebilir)
    fetch(`https://65c88862a4fbc162e111d4fa.mockapi.io/order-product/${orderId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log(`Sipariş #${orderId} silindi.`);
            // Siparişi sildikten sonra tabloyu güncelle
            fetchOrderData();
        } else {
            console.error(`Sipariş #${orderId} silinirken bir hata oluştu.`);
        }
    })
    .catch(error => {
        console.error('Sipariş silme hatası:', error);
    });
}

function fetchOrderDataFromMockAPI() {
    return fetch('https://65c88862a4fbc162e111d4fa.mockapi.io/order-product')
        .then(response => response.json())
        .catch(error => {
            console.error('Sipariş API Hatası:', error);
            return [];
        });
}
