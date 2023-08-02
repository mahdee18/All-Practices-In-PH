function pandaCost(singaraQuantity, somuchaQuantity, jelebuQuantity) {
    const singleSingaraPrice = 10;
    const singleSomuchaPrice = 15;
    const singleJelebiPrice = 20;

    var totalSingaraCost = singleSingaraPrice * singaraQuantity;
    var totalSomuchaCost = singleSomuchaPrice * somuchaQuantity;
    var totalJelebiCost = singleJelebiPrice * jelebuQuantity;

    var totalCost = totalSingaraCost + totalSomuchaCost + totalJelebiCost;
    return totalCost;
}
const itemQuantity = pandaCost(5,6,5)
console.log(itemQuantity)