function addToCart(itemPrice, itemName) {
    const cartItem = {
        price: itemPrice,
        name: itemName
    };
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}