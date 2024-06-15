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
        } else if (emailInput.validity.valueMissing) {
            emailInput.setCustomValidity('Este campo es requerido');
        } else if (emailInput.validity.tooShort) {
            emailInput.setCustomValidity('Debe tener al menos 4 caracteres antes del @');
        } else {
            emailInput.setCustomValidity('');
        }

        if (emailInput.checkValidity()) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            emailInput.nextElementSibling.textContent = '';
        } else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            emailInput.nextElementSibling.textContent = emailInput.validationMessage;
        }
    });

    passwordInput.addEventListener('input', function(event) {
        if (passwordInput.validity.patternMismatch) {
            passwordInput.setCustomValidity('La contraseña no debe contener espacios');
        } else {
            passwordInput.setCustomValidity('');
        }

        if (passwordInput.checkValidity()) {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
            passwordInput.nextElementSibling.textContent = '';
        } else {
            passwordInput.classList.remove('is-valid');
            passwordInput.classList.add('is-invalid');
            passwordInput.nextElementSibling.textContent = 'La contraseña debe tener entre 8 y 15 caracteres y no debe contener espacios.';
        }
    });
});

/** aaaaaaaaaaaaaaaaaaaaaaaaa ya nms ya quedo que ia no le muevan a esta webada :'3**/