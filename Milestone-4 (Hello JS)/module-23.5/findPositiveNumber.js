function getPositiveNumber(numbers) {
    let PositiveNumber = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            PositiveNumber.push(numbers[i])

        }
        else {
            break;
        }
    }
    return PositiveNumber;
}
let numbers = [5, 6, 3, 33, -2, 22]
var positiveNumbers = getPositiveNumber(numbers)
console.log(positiveNumbers)