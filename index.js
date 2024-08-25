// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const quantitySpan = item.querySelector('.quantity');
        const priceElement = item.querySelector('.item-price');
        const removeButton = item.querySelector('.remove-btn');
        const minusButton = item.querySelector('.minus-btn');
        const plusButton = item.querySelector('.plus-btn');

        // Update total price
        function updateTotalPrice() {
            let totalPrice = 0;
            cartItems.forEach(cartItem => {
                const price = parseFloat(cartItem.dataset.price);
                const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
                totalPrice += price * quantity;
            });
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }

        
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

    
        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });
    });
});
