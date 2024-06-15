document.querySelector('form').addEventListener('submit', function (event) {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
    } else {
        confirmPassword.setCustomValidity('');
    }
});