/* Abrir y cerrar el carrito de compra */
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* Agregar, eliminar y sumar en el carrito de compra */
const cartInfo = document.querySelector('cart-product')
const rowProduct = document.querySelector('.row-product')

//Lista de todos los contenedores de productos
const productList = document.querySelector('.container-items')

//Variable de arreglos de productos
let allProducts = []

productList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')){
        
    }
})