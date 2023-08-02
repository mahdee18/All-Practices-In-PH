

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get input new Withdraw Amount
    const newWithdrawAmount = getInputValue('withdraw-input')

    // isNaN For validation
    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a valid Number!!')
        return;
    }

    // Display on withdraw total
    const previousWithdrawTotal = getTotalAmount('withdraw-total');
    console.log(previousWithdrawTotal)

    // Update Total Balance after withdraw balance
    const previousTotalBalance = getTotalAmount('balance-total');

    // For Validation Alert
    if(newWithdrawAmount>previousTotalBalance){
        alert('Tui fokir tor account eh eto taka nai!!')
        return;
    }

    // Update Withdraw Total
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawTotal;
    setElementValue('withdraw-total',totalWithdrawAmount)

    // Update Current Balance Total
    const currentBalanceTotal = previousTotalBalance - newWithdrawAmount;
    setElementValue('balance-total',currentBalanceTotal)




})