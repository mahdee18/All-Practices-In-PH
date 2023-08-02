// Simple function using pera meters

function addition(num1, num2) {
    var add = num1 + num2;
    console.log(add)
}
var sum = addition(12, 8)

// Complex Function using pera meters
function averageMarks(assignment1, assignment2, assignment3) {
    var sum = assignment1 + assignment2 + assignment3;
    var averageMarks = sum / 3;
    return averageMarks;
}
var assignment1Marks = 60;
var assignment2Marks = 60;
var assignment3Marks = 60;
var average = averageMarks(assignment1Marks, assignment2Marks, assignment3Marks)
console.log('My Average assignment marks is :' + ' ' + average)