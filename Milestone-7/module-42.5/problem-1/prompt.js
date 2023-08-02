let number = prompt('Input a Number:');
number = parseFloat(number);
if (isNaN(number)) {
  alert('This is not a valid number!!');
} else {
  let result = number + 200;
  alert('Result: ' + result);
}
