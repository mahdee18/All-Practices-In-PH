
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Get deposit amount
    const depositAmount = document.getElementById('deposit-amount')
    const newDepositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // isNaN
    if(isNaN(newDepositAmount)){
        alert('please Enter a Valid number!!')
        return;
    }
    // Show on deposit total
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositInputString = depositTotal.innerText;
    const previousDepositInput = parseFloat(previousDepositInputString)
    // Total deposit
    const totalDepositAmount = previousDepositInput + newDepositAmount

    depositTotal.innerText = totalDepositAmount;

    // Calculate deposit total in balance
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const totalCurrentBalance = previousBalanceTotal + newDepositAmount;
    // set the value
    balanceTotalElement.innerText = totalCurrentBalance;


    // Clear the deposit field
    depositAmount.value = '';


})