function factorial(number) {
    let result = 1;
    for (let i = 1; i < number; i++) {
        result = result * i;

    }
    return result;
}
var num = factorial(10);

console.log(num)