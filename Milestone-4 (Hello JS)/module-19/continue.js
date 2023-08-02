var numbers = [22, 23, 13, 21, 44, 56, 76, 88, 79, 90]
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number < 50) {
        continue
    }
    console.log(number)
}