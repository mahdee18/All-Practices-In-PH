function tallest(number) {
    var heighestNum = number[0]
    for (var i = 0; i < number.length; i++) {
        let index = i;
        let element = number[i]
        if (element > heighestNum) {
            heighestNum = element
        }
    }
    return heighestNum;
}
let largest = [145, 167, 187, 149, 199]
let hightest = tallest(largest)
console.log(hightest)