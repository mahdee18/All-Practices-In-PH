function sumOfAnArray(number) {
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index]
        sum = sum + element
        console.log(index, element, sum)
    }
}
let myNumber = [11, 21, 23, 21, 33, 34]
sumOfAnArray(myNumber)