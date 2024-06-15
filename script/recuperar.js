document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recoverForm');
    const emailInput = form.querySelector('#inputEmail');
    const passwordInput = form.querySelector('#inputPassword');

    // Función para validar el campo de correo electrónico en tiempo real
    emailInput.addEventListener('input', function(event) {
        if (emailInput.validity.valueMissing) {
            emailInput.setCustomValidity('Este campo es requerido');
        } else if (emailInput.validity.patternMismatch) {
            emailInput.setCustomValidity('Ingrese un correo válido de Gmail, Outlook o Hotmail');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    // Función para validar el campo de contraseña en tiempo real
    passwordInput.addEventListener('input', function(event) {
        if (passwordInput.validity.valueMissing) {
            passwordInput.setCustomValidity('Este campo es requerido');
        } else if (passwordInput.validity.patternMismatch) {
            passwordInput.setCustomValidity('La contraseña no debe contener espacios');
        } else {
            passwordInput.setCustomValidity('');
        }
    });

    // Evitar que el formulario se valide automáticamente antes de enviarlo
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });
});
