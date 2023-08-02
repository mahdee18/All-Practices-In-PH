document.getElementById('btn-deposit').addEventListener('click', function () {
    // get new amount for deposit
    const depositInput = document.getElementById('deposit-input')
    const depositInputString = depositInput.value;
    const newDepositAmount = parseFloat(depositInputString)

    // Clear Input value
    depositInput.value = '';

    // isNaN For validation
    if (isNaN(newDepositAmount)) {
        alert('Please Enter a valid Number!!')
        return;
    }

    // Show on deposit amount
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositString = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositString)
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = currentDepositAmount;

    // Update Total balance
    const totalBalanceElement = document.getElementById('balance-total')
    const totalBalanceElementString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceElementString);
    const currentBalanceTotal = newDepositAmount + previousTotalBalance;
    totalBalanceElement.innerText = currentBalanceTotal;



})