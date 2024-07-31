document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));
            cart.push({ name, price });
            updateCart();
            alert('Product added to cart!');
        });
    });

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
    });
});
