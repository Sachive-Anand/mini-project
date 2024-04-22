// script.js
function addToCart(productName, price) {
    const quantity = 1; // Default quantity is set to 1
    const total = price * quantity;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ productName, price, quantity, total });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${quantity} ${productName}(s) to cart.`);
}
