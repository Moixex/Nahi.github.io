// script.js

const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const messageContainer = document.getElementById('messageContainer');
const songLink = document.getElementById('songLink');

// Lista de mensajes románticos que se mostrarán
const messages = [
    "Desde que llegaste a mi vida, todo cambió para mejor.",
    "Eres mi hermosa luna en los dias mas oscuros, mi refugio en las tormentas.",
    "No imagino un solo día sin ti a mi lado.",
    "Gracias por ser tú, por hacerme tan feliz.",
    "Te adoro mas que nada y sobre todo amo, nahir.",
    "¿Quieres ser mi novia? ❤️"  // Mensaje final antes de la canción
];

let messageIndex = 0;

// Función para iniciar la declaración
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Oculta el botón de inicio
    showNextMessage(); // Muestra el primer mensaje
});

// Función para mostrar el siguiente mensaje
function showNextMessage() {
    if (messageIndex < messages.length) {
        messageContainer.innerHTML = messages[messageIndex];
        messageIndex++;
        if (messageIndex < messages.length) {
            nextButton.style.display = 'block'; // Muestra el botón "Siguiente" si hay más mensajes
        } else {
            nextButton.style.display = 'none'; // Oculta el botón en el último mensaje
            setTimeout(() => {
                songLink.click(); // Abre el enlace de la canción después del último mensaje
            }, 2000);
        }
    }
}

// Event listener para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    nextButton.style.display = 'none';
    setTimeout(showNextMessage, 2000); // Muestra el siguiente mensaje después de 2 segundos
});
