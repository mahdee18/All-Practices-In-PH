// Get Value from Input
function getInputValue(inputId){
    
    const inputAmount = document.getElementById(inputId)
    const inputAmountString = inputAmount.value;
    const inputAmountValue = parseFloat(inputAmountString)
    inputAmount.value = '';
    return inputAmountValue;
}
// Get display the total input value
function getTotalAmount(elementId){
    const totalAmount = document.getElementById(elementId)
    const totalAmountString = totalAmount.innerText;
    const totalAmountValue = parseFloat(totalAmountString)
    return totalAmountValue;
}
// Get Set the value amount
function setElementValue(elementId,newValue){
    const elementValue = document.getElementById(elementId)
    elementValue.innerText = newValue
}