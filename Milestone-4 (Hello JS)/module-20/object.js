// Object declaration
var myMobile = {
    brand: 'Motorala',
    storage: '64 GB',
    RamV: 'LPDRX4',
    price: 14999,
    color: 'Sea blue'
}
console.log(myMobile)
myMobile.price = 20000
console.log(myMobile.price)

// Practice

var shoppingCart = {
    mouse: 15,
    Keyboard: 12,
    Mobile: 10,
    fan: 8,
    laptop: 18,

}
console.log(shoppingCart)
// Update value
shoppingCart.Keyboard = 10;
console.log(shoppingCart)

shoppingCart['mouse'] = 24;
console.log(shoppingCart)

var mouseQuantity = 'mouse'
shoppingCart[mouseQuantity] = 50;
console.log(shoppingCart)