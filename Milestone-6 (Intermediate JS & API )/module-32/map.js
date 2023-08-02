// Mapping with function
const numbers = [10, 12, 33, 13, 123, 213,]

const doubleIt = num => num * 2
const getDouble = numbers.map(doubleIt)
console.log(getDouble)

// Mapping without function
const getDoubles = numbers.map(num => num * 2)
console.log(getDoubles)


// Map string
const product = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 45000 },
    { id: 1, name: 'Watch', price: 45000 },
    { id: 1, name: 'Tablet', price: 45000 }
]
const getName = product.map(product=>product.name)
console.log(getName)
const getPrice = product.map(product=>product.price)
console.log(getPrice)
const getMobilePrice = product.map(mobile=>mobile[1].price)
console.log(getMobilePrice)