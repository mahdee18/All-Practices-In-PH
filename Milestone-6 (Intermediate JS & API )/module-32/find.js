// Practice-1
const numbers = [33, 22, 44, 32, 31, 34, 45]
const five = numbers.find(n => n % 5 === 0)
console.log(five)

// Practice-2
const product = [
    { id: 1, name: 'Laptop', price: 4000 },
    { id: 1, name: 'Mobile', price: 5000 },
    { id: 1, name: 'Watch', price: 45000 },
    { id: 1, name: 'Tablet', price: 45000 }
]
const cheapest = product.find(product=>product.price<40000)
console.log(cheapest)