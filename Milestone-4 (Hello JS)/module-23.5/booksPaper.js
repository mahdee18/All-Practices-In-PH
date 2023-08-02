function booksPaper(book1Quantity, book2Quantity, book3Quantity) {
    let firstBookPaper = 100;
    let firstBookTotalPaper = firstBookPaper * book1Quantity
    let secondBookPaper = 200;
    let secondBookTotalPaper = secondBookPaper * book2Quantity
    let thirdBookPaper = 300;
    let thirdBookTotalPaper = thirdBookPaper * book3Quantity

    totalPaper = firstBookTotalPaper + secondBookTotalPaper + thirdBookTotalPaper

    return totalPaper

}
var totalPaperRequirement = booksPaper(2, 3, 4)
console.log('Total page Requiremnt is:', totalPaperRequirement)