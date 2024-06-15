const url_de_frases = 'https://api.quotable.io/random';
const url_para_traducir = 'https://api.mymemory.translated.net/get';

const Cita_contenedor = document.getElementById('contenedor-cita');
const citacion = document.getElementById('cita');
const AUTOR = document.getElementById('autor');

// Obtener cita en inglés
fetch(url_de_frases)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const cita = data.content;
        const author = data.author;

        // Mostrar cita en inglés
        citacion.textContent = cita; 
        AUTOR.textContent = `- ${author}`; 

        // Traducir cita a español
        traducir_cita(cita);
    })
    .catch(error => {
        console.error('Error al obtener la cita en inglés:', error);
        citacion.textContent = 'Error al cargar la cita.';
    });

// Función para traducir cita a español
function traducir_cita(cita) {
    const parametros = new URLSearchParams({
        q: cita,
        langpair: 'en|es' /*en = ingles y es= español, traducir de ingles a español*/ 
    });

    // Realizar solicitud de traducción
    fetch(`${url_para_traducir}?${parametros}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const translatedQuote = data.responseData.translatedText;

            // Mostrar cita traducida
            citacion.textContent = translatedQuote;  
        })
        .catch(error => {
            console.error('Error al traducir la cita:', error);
            citacion.textContent = 'Error al cargar la cita traducida.';
        });
}
