document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // To clear the value
    withdrawAmount.value = '';
    
    // isNaN
    if(isNaN(newWithdrawAmount)){
        alert('please Enter a Valid number!!')
        return;
    }
    // Show on withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawInputString = withdrawTotal.innerText;
    const previousWithdrawInput = parseFloat(previousWithdrawInputString);

    // Update total Balance

    const totalBalanceElement = document.getElementById('balance-total')
    const totalBalanceString = totalBalanceElement.innerText
    const totalBalance = parseFloat(totalBalanceString)
    const totalCurrentBalance = totalBalance - newWithdrawAmount;

    // Error validation
    if (newWithdrawAmount > totalCurrentBalance) {
        alert('Tor baaper Bank e eto taka nai!!')
        return;
    }

    // Total withdraw
    const currentWithdraw = previousWithdrawInput + newWithdrawAmount
    withdrawTotal.innerText = currentWithdraw;

    // Set the value
    totalBalanceElement.innerText = totalCurrentBalance;

})