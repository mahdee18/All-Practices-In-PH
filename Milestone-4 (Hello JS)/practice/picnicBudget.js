function picnicBudget(members) {
    const first100Rate = 5000;
    const second100Rate = 4000;
    const restRate = 3000;
    if (members <= 100) {
        const totalFirst100Cost = first100Rate * members;
        return totalFirst100Cost;
    }
    else if (members <= 200) {
        const totalFirst100Cost = first100Rate * 100;
        const restPerson = members - 100;
        const restPrice = restPerson * second100Rate;
        const totalFirst200Cost = totalFirst100Cost + restPrice;
        return totalFirst200Cost;
    }
    else {
        const totalFirst100Cost = first100Rate * 100;
        const totalSecond100Cost = second100Rate * 100;
        const restPerson = members - 200;
        const restPrice = restPerson * restRate;
        const totalCost = totalFirst100Cost + totalSecond100Cost + restPrice;
        return totalCost;

    }
}
const member = picnicBudget(300)
console.log('Total Cost is :', member)