function farToClc(fahrenheit) {
    let clc = (fahrenheit - 32) * 5 / 9;
    return clc
}
var fahrenheit = 248;
var clc = farToClc(fahrenheit)
console.log(clc)