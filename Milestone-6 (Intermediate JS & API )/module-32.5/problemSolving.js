// Practice -1
const name = 'Mahdee';
let CGPA = 3.50;

// Practice -2(Dynamic String)
const a = 10;
const b = 20;
let sum = a + b;
console.log(`The ${a} and ${b} added sum = ${sum}`)

// Practice -3 (Declare an arrow function)
const number = 20;
const getDevidedBy5 = number => number / 5;
console.log(getDevidedBy5(number))

// Practice -4 (Math operation )
const getNumber = (num1, num2) => (num1 + 2) * (num2 + 2);
const numbers = getNumber(10, 10)
console.log(numbers)

// Practice -5 (math operation)
const getTotal = (num1, num2, num3) => num1 * num2 * num3;
const total = getTotal(10, 10, 10)
console.log(total)

// Practice -6
const getNumbers = (num1, num2) => {
    const firstNum = num1 * 2
    const secondNum = num2 * 2
    const total = firstNum + secondNum;
    return total;
}
const getNumberss = getNumbers(10, 10)
console.log(getNumberss)


// Practice -7
const newNumbers = [10, 12, 12, 213, 123]
const getMultiplied = newNumbers.map(newNumbers => newNumbers * 5)
console.log(getMultiplied)

// Practice -8
const getOdd = newNumbers.filter(newNumbers => newNumbers % 2 === 1)
console.log(getOdd)

// Practice -9
const item = [
    { name: 'Mobile', price: 40000, quantity: 1 },
    { name: 'Laptop', price: 33000, quantity: 1 },
    { name: 'watch', price: 4000, quantity: 1 }
]
const findWatch = item.find(p => p.price > 5000)
console.log(findWatch)

// Practice -10
const array = [23,4,33,44,22]
const [one,two,three]= array
console.log(three)

// Problem -11
const threeSum = (num1,num2,num3=7)=>num1+num2+num3
const declareTheNumber = threeSum(10,11)
console.log(declareTheNumber)

// Problem -12
const mySelf = {
    name:'Mahdee',
    age:20,
    address:{
        home:'Sylhet',
        city:'Dowbari',

    },
    skills:[
        'HTML','CSS','Tailwind','Bootstrap','Basic JS','DOM'
    ]

    }
    console.log(mySelf.skills)