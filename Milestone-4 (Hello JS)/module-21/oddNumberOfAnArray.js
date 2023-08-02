function oddNumber(number) {
    let sum = 0;
    let oddNum = []
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[i]

        if (element % 2 !== 0) {
            sum = sum + element
            console.log(element)
            oddNum.push(element)
        }

    }
    return oddNum;
}
let myNumber = [11, 21, 23, 21, 33, 34]
let oddNum = oddNumber(myNumber)
var sum = 0
for (var i = 0; i < oddNum.length; i++) {
    var sum = sum + i
    console.log(sum)
}
oddNumber(myNumber)
console.log(oddNum)


