document.getElementById('btn-submit').addEventListener('click', function () {
    // Get email field input value
    const emailField = document.getElementById('email')
    const emailInput = emailField.value;

    // Get password field input value
    const passwordField = document.getElementById('password')
    const passwordInput = passwordField.value;

    if (emailInput === 'mahdee@gmail.com' && passwordInput === '0000') {
        window.location.href = 'dashboard.html'
    }
    else {
        alert('Invalid Input')
    }
})