// Problem -1

/*---Description: Take a number as parameter in the function and solve some mathematical problem like multiplication, addition, division, and subtraction and return the final result ---*/

function mindGame(number) {
    // For invalid input message :)
    if (typeof number === 'string' || typeof number === 'boolean') {
        return ('Opps! This is not a valid number!!')
    }
    else {
        //multiply the input by 3
        const multiply = number * 3;

        // add 10 with multiplied input
        const sum = multiply + 10;

        // divided by 2 in the sum input
        const divided = sum / 2;

        // subtract by 5 from divided
        const subtract = divided - 5;

        // return the final value
        return subtract;
    }
}

let number = mindGame(50)
console.log(number)


// Problem -2
/*--- Description: Take a sentence as a parameter and calculate length of the sentence. Then the length of sentence is even number, return "even" on the other hand return "odd"  ---*/
function evenOdd(name) {
    // For invalid input message :)
    if (typeof name === 'number' || typeof name === 'boolean') {
        return ('Opps! This is not a valid input!!')
    }
    // check the input length: even/odd 
    else if (name.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const item = evenOdd('phero')
console.log(item)

// Problem -3

/*--- Description : This function receive a number. then 7 will be subtracted from this number. if this subtracted
result is smaller than 7, return this result. on the other hand return double of the input ---*/

function isLGSeven(number) {
    let difference = number - 7;

    // For invalid input message :)
    if (typeof number === 'string' || typeof number === 'boolean') {
        return ('Opps! This is not a valid number!!')
    }
    // if the difference is less than 7
    if (difference < 7) {
        return difference;
    }
    // if the condition is false
    else {
        return number * 2;
    }
}
let isnum = isLGSeven(15)
console.log(isnum)


// Problem -4
/*--- Description: This function receive an array. the array has a goodNumber(positive) and badNumber(negative). return the badNumber(negative) on this array ---*/

function findingBadData(data) {
    if (!Array.isArray(data)) {
        return 'Opps! This is not a valid number!!';
    }

    let count = 0;
    for (let i = 0; i < data.length; i++) {
        const elements = data[i];

        if (typeof elements !== "number") {
            return 'Opps! This is not a valid number!!';
        }

        if (elements < 0) {
            count++;
        }
    }
    return count;
}

console.log(findingBadData([11, 11, 22, -11, -55]));

// Problem -5
/*--- Description : This function receive 3 parameter(gems of 3 friends). Numbers are multiplied with 21, 32, 43 sequentially.
then addition of 3 number. this addition result is smaller than 2000, return this addition result. on the other hand return (addition - 2000) ---*/

function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 === "number" && typeof gems2 === "number" && typeof gems3 === "number") {
        const gem1Power = gems1 * 21;
        const gem2Power = gems2 * 32;
        const gem3Power = gems3 * 43;

        const totalDiamond = gem1Power + gem2Power + gem3Power;
        if (totalDiamond >= 1000 * 2) {
            const remainingDiamonds = totalDiamond - 2000;
            return remainingDiamonds;

        }
        else {
            return totalDiamond;
        }
    }
    else {
        return 'Opps! This is not a valid number!!'
    }
}
let num = gemsToDiamond(100, 5, 1)
console.log(num)