function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 80;
    if (ticketQuantity <= 100) {
        const price = first100Rate * ticketQuantity;
        return price
    }
    else if (ticketQuantity <= 200) {
        const first100Price = first100Rate * 100
        const restTicketQuantity = ticketQuantity - 100
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice
        return totalPrice
    }
    else {
        const first100Price = first100Rate * 100
        const second100Price = second100Rate * 100
        const restTicketQuantity = ticketQuantity - 200
        const restTicketPrice = restTicketQuantity * restRate;
        totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost

    }
}
var ticketQuantity = ticketPrice(300)
console.log('Total ticket Cost is :', ticketQuantity)