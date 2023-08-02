function isOdd(number) {
    const remainder = number % 2;
    if (remainder === 1) {
        return true
    }
    else {
        return false
    }
}
const myNumber = isOdd(14)
const herNumber = 15;
const herNumberIsOdd = isOdd(herNumber);
console.log(myNumber, herNumberIsOdd)