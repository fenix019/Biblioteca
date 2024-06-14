document.getElementById('registroForm').onsubmit = async function(event) {
    event.preventDefault();
    await enviarCorreo();
}

function enviarCorreo() {
    var remitente = "delacruzhernandezoscardavid@outlook.com";
    var destinatario = document.getElementById("email").value;
    var nombre = document.getElementById("name").value;

    Email.send({
        Host: "smtp-mail.outlook.com",
        Username: "delacruzhernandezoscardavid@outlook.com",
        Password: "D@vidpro1987", /*cfcff*/ 
        To: destinatario,
        From: remitente,
        Subject: "Mensaje de nuevo usuario",
        Body: "Hola " + nombre + ",\n\nTu registro a sido validado."
    }).then(
        mensaje => {
            alert("Correo enviado exitosamente: " + mensaje);
            Email.send({
                Host: "smtp-mail.outlook.com",
                Username: "delacruzhernandezoscardavid@outlook.com",
                Password: "D@vidpro1987", /*cfcff*/ 
                To: remitente,
                From: "delacruzhernandezoscardavid@outlook.com",
                Subject: "Confirmación de recepción de datos",
                Body: "El destinatario ha recibido los datos exitosamente.\n\nGracias por registrarte con nosotros."
            }).then(
                confirmacion => alert("Correo de confirmación enviado exitosamente: " + confirmacion)
            ).catch(
                error => alert("Error al enviar el correo de confirmación: " + error)
            );
        }
    ).catch(
        error => alert("Error al enviar el correo al destinatario: " + error)
    );
}