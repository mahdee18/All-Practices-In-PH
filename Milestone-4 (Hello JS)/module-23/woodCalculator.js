function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    totalChairWood = perChairWood * chairQuantity;
    totalTableWood = perTableWood * tableQuantity;
    totalBedWood = perBedWood * bedQuantity;

    var totalWood = totalChairWood + totalTableWood + totalBedWood
    return totalWood;
}
var totalWoods = woodCalculator(1, 1, 1)
console.log(totalWoods)