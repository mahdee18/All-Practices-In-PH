document.getElementById('btn-deposit').addEventListener('click', function () {
    // get new amount for deposit
    const newDepositAmount = getInputValue('deposit-input')

    // isNaN For validation
    if (isNaN(newDepositAmount)) {
        alert('Please Enter a valid Number!!')
        return;
    }

    // Show on deposit amount
    const previousDepositAmount = getTotalAmount('deposit-total')
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    setElementValue('deposit-total',currentDepositAmount);

    // Update Total balance
    const previousTotalBalance = getTotalAmount('balance-total')
    const currentBalanceTotal = newDepositAmount + previousTotalBalance;
    setElementValue('balance-total',currentBalanceTotal);



})