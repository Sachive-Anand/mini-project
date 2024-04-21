// Define an array to store the cart items
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Calculate total price
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }

    // Redirect to cart page
    window.location.href = 'cart.html';

    // Alternatively, you can display the cart information on the same page using DOM manipulation
}

// Add event listener to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        let name = this.getAttribute('data-name');
        let price = parseFloat(this.getAttribute('data-price'));
        addToCart(name, price);
    });
});
