// Practice-1
const numbers =[33,22,44,32,31,34,23]
const even = numbers.filter(number=>number%2===0)
console.log(even)

// Practice-2
const product = [
    { id: 1, name: 'Laptop', price: 4000 },
    { id: 1, name: 'Mobile', price: 5000 },
    { id: 1, name: 'Watch', price: 45000 },
    { id: 1, name: 'Tablet', price: 45000 }
]
const cheapest = product.filter(product=>product.price<40000)
console.log(cheapest)
