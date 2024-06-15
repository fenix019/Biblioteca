 // Función para validar campos en tiempo real
 function validateInput(inputElement) {
    var isValid = inputElement.checkValidity();
    if (!isValid) {
        inputElement.classList.add('is-invalid');
        inputElement.nextElementSibling.style.display = 'block';
    } else {
        inputElement.classList.remove('is-invalid');
        inputElement.nextElementSibling.style.display = 'none';
    }
}

// Eventos para validar campos en tiempo real
document.getElementById('username').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('name').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('lastname').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('lastname2').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('email').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('password').addEventListener('input', function() {
    validateInput(this);
});

document.getElementById('password2').addEventListener('input', function() {
    validateInput(this);
});

// Validación al enviar el formulario
document.getElementById('registroForm').addEventListener('submit', function(event) {
    var form = document.getElementById('registroForm');
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
    
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    if (password !== password2) {
        alert('Las contraseñas no coinciden');
        event.preventDefault();
    }
});