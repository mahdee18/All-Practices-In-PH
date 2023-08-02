function mileToKm(miles) {
    let kilometer = miles * 1.602
    return kilometer;
}
let inputMiles = 10;
let toKm = mileToKm(inputMiles);
console.log(toKm.toFixed(4))