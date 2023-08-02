function reverseFact(number) {
    var result = number;
    var i = 7;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
var num = reverseFact(10)
console.log(num)