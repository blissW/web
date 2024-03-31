// webhook.js

function sendMessage(webhookURL, message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Mensaje enviado:", message);
            alert("Mensaje enviado correctamente.");
        } else {
            console.error('Error al enviar el mensaje. Código de estado:', xhr.status);
            alert("Hubo un error al enviar el mensaje.");
        }
    };

    xhr.onerror = function () {
        console.error('Error al enviar el mensaje. No se pudo conectar al servidor.');
        alert("Hubo un error al enviar el mensaje.");
    };

    xhr.send(JSON.stringify({ content: message }));
}
