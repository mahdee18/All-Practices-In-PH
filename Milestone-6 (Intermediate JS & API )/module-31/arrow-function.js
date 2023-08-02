// Normal function declaration
function getName(first,last){
    return first+last
}
const name = getName('Mahdee ','Al Amin');
console.log(name);

// Arrow Function(multiple parameter)
const getNames = (first,last) => first+last;
const myName = getNames('Mahdee ','Al Amin')
console.log(myName);

// Arrow function (Single parameter)
const getAge = age =>age
const ages = getAge(5)
console.log(ages)

// Arrow function (Without parameter)
const getPie =() => 3.1416
const pie = getPie()