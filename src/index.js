/* Abrir y cerrar el carrito de compra */
const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* Agregar, eliminar y sumar en el carrito de compra */
const cartInfo = document.querySelector('cart-product')