document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('passwordRecoveryForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            alert('Formulario válido, se podría procesar el envío aquí.');
            // Aquí iría el código para procesar la recuperación de contraseña
        } else {
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });

    // Para mostrar errores en tiempo real
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });
});
