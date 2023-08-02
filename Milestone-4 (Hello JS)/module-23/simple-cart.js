function shoppingCart(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        sum = sum + product.price * product.quantity;
    }
    return sum;
}
let shopping = [
    { name: 'Pant', price: 4000, quantity: 4 },
    { name: 'Shirt', price: 2200, quantity: 3 },
    { name: 'Belt', price: 1200, quantity: 2 },
    { name: 'Shoes', price: 6000, quantity: 4 }
]
let myShopping = shoppingCart(shopping)
console.log(myShopping)
