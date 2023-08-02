const laptop = {
    brand:'HP',
    model:'g3-890',
    price:55000,
    isNew: true
}
// Keys method
const keys = Object.keys(laptop)
console.log(keys)

// Values method
const value = Object.values(laptop)
console.log(value)

// Entering
const entering = Object.entries(laptop)
console.log(entering)
// Delete element
delete laptop.model;
console.log(laptop)
// Seal method
Object.seal(laptop)
laptop.model='helio-g5';
console.log(laptop)
// Freeze method
Object.freeze(laptop)
laptop.model='helio-g5';
console.log(laptop)

