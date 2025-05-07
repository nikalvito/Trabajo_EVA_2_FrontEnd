function redirigirRegistro() {
    window.location.href = "registro.html";
}

function redirigirLogin() {
    window.location.href = "login.html";
}

const frasesMotivadoras = [
    "Cada alimento salvado es un paso hacia un planeta más sostenible.",
    "Reduce, reutiliza y disfruta: el poder está en tus manos.",
    "Juntos podemos alimentar al mundo sin desperdiciar recursos."
];

function mostrarFraseAleatoria() {
    const fraseContainer = document.getElementById('fraseMotivadora');
    if (fraseContainer) {
        const fraseAleatoria = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
        fraseContainer.textContent = `"${fraseAleatoria}"`;
    }
}

function cambiarMensajeBienvenida() {
    const hora = new Date().getHours();
    const mensajeBienvenida = document.querySelector('.hero p');
    
    if (mensajeBienvenida) {
        if (hora < 12) {
            mensajeBienvenida.textContent = "Buenos días, únete a la reducción del desperdicio de alimentos.";
        } else if (hora < 19) {
            mensajeBienvenida.textContent = "Buenas tardes, únete a la reducción del desperdicio de alimentos.";
        } else {
            mensajeBienvenida.textContent = "Buenas noches, únete a la reducción del desperdicio de alimentos.";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarFraseAleatoria();
    cambiarMensajeBienvenida();
});