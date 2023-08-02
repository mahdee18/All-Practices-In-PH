document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get input new Withdraw Amount
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputString = withdrawInput.value
    const newWithdrawAmount = parseFloat(withdrawInputString)

    // Clear the withdraw Input
    withdrawInput.value = '';

    // isNaN For validation
    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a valid Number!!')
        return;
    }

    // Display on withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);


    // Update Total Balance after withdraw balance
    const totalBalanceElement = document.getElementById('balance-total')
    const totalBalanceElementString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceElementString);

    // For Validation Alert
    if(newWithdrawAmount>previousTotalBalance){
        alert('Tui fokir tor account eh eto taka nai!!')
        return;
    }

    // Update Withdraw Total
    const totalDepositAmount = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotal.innerText = totalDepositAmount;
    
    // Update Current Balance Total
    const currentBalanceTotal = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentBalanceTotal;




})