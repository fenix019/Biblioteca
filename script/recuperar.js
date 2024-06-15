document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recoverForm');
    const emailInput = form.querySelector('#inputEmail');
    const passwordInput = form.querySelector('#inputPassword');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });

    emailInput.addEventListener('input', function(event) {
        if (emailInput.validity.patternMismatch) {
            emailInput.setCustomValidity('Ingrese un correo válido de Gmail, Outlook o Hotmail');
        } else {
            emailInput.setCustomValidity('');
        }

        if (emailInput.checkValidity()) {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        } else {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
        }
    });

    passwordInput.addEventListener('input', function(event) {
        if (passwordInput.validity.patternMismatch) {
            passwordInput.setCustomValidity('La contraseña no debe contener espacios');
        } else {
            passwordInput.setCustomValidity('');
        }

        if (passwordInput.checkValidity()) {
            passwordInput.classList.add('is-valid');
            passwordInput.classList.remove('is-invalid');
        } else {
            passwordInput.classList.add('is-invalid');
            passwordInput.classList.remove('is-valid');
        }
    });
});
