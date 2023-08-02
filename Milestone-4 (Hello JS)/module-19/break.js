var number = [20,30,40,50,44,80,88]
for(var i = 0; i<number.length ; i++){
    var numbers = number[i]
    if(numbers>50){
        break

    }
    console.log(numbers)
}
// Print odd number of an array
var number = [20, 30, 40, 50, 44, 80, 33, 23, 77, 88]
for (var i = 0; i < number.length; i++) {
    var oddNumber = number[i]
    if (number % 2 == 1) {
        break
    }
    console.log(oddNumber)
}