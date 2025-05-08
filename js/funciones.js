
const productos = [
    {
        nombre: "Canasta de Frutas de Temporada",
        descripcion: "Selección de frutas frescas recolectadas hoy mismo",
        precio: "$5.990",
        imagen: "img/frutita.jpg"
    },
    {
        nombre: "Pack de Verduras Orgánicas",
        descripcion: "Verduras frescas de pequeños agricultores locales",
        precio: "$7.500",
        imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nombre: "Panadería del Día",
        descripcion: "Pan recién horneado que no se vendió durante el día",
        precio: "$2.990",
        imagen: "img/pancito.jpg"
    }
];

let comentarios = [
    {
        nombreUsuario: "María González",
        textoComentario: "Excelente iniciativa, he reducido mi desperdicio de alimentos significativamente gracias a EcoFood.",
        fecha: "15/05/2025"
    },
    {
        nombreUsuario: "Carlos Muñoz",
        textoComentario: "Los productos son de excelente calidad y a muy buen precio. Además, ayudamos a reducir el desperdicio.",
        fecha: "22/05/2025"
    }
];

function cargarProductos() {
    if (document.getElementById('contenedorProductos')) {
        const contenedor = document.getElementById('contenedorProductos');
        contenedor.innerHTML = '';

        productos.forEach(producto => {
            const productoHTML = `
                <div class="service">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:15px;">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion} - ${producto.precio}</p>
                    <button class="btn" onclick="verDetalle('${producto.nombre}')">Ver Detalle</button>
                </div>
            `;
            contenedor.innerHTML += productoHTML;
        });
    }
}

function verDetalle(nombreProducto) {
    alert(`Detalles de ${nombreProducto}\nPróximamente más información...`);
}

function cargarComentarios() {
    if (document.getElementById('listaComentarios')) {
        const lista = document.getElementById('listaComentarios');
        lista.innerHTML = '<h3>Comentarios Recientes</h3>';

        comentarios.forEach(comentario => {
            const comentarioHTML = `
                <div class="card" style="margin-bottom:20px;">
                    <h4>${comentario.nombreUsuario}</h4>
                    <p><em>${comentario.fecha}</em></p>
                    <p>${comentario.textoComentario}</p>
                </div>
            `;
            lista.innerHTML += comentarioHTML;
        });
    }
}

function agregarComentario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombreUsuario').value;
    const texto = document.getElementById('comentarioTexto').value;
    
    if (nombre && texto) {
        const nuevoComentario = {
            nombreUsuario: nombre,
            textoComentario: texto,
            fecha: new Date().toLocaleDateString('es-CL')
        };
        
        comentarios.unshift(nuevoComentario); 
        document.getElementById('formComentario').reset();
        cargarComentarios();
        
        const mensaje = document.createElement('div');
        mensaje.className = 'alert alert-success';
        mensaje.textContent = '¡Comentario publicado con éxito!';
        document.getElementById('formComentario').appendChild(mensaje);
        
        setTimeout(() => mensaje.remove(), 3000);
    } else {
        alert('Por favor completa todos los campos');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    cargarComentarios();
    
    if (document.getElementById('formComentario')) {
        document.getElementById('formComentario').addEventListener('submit', agregarComentario);
    }
});

// Funciones existentes (se mantienen igual)
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


const faqs = [
    {
        pregunta: "¿Cómo puedo contribuir a reducir el desperdicio de alimentos?",
        respuesta: "Puedes comenzar planificando tus compras, almacenando correctamente los alimentos, utilizando sobras creativamente y apoyando iniciativas como la nuestra que rescatan alimentos."
    },
    {
        pregunta: "¿Los productos que ofrecen son seguros para el consumo?",
        respuesta: "Absolutamente. Todos los alimentos que distribuimos cumplen con los más altos estándares de calidad y seguridad alimentaria, aunque puedan estar cerca de su fecha de caducidad o tener imperfecciones cosméticas."
    },
    {
        pregunta: "¿Cómo funciona el sistema de donaciones?",
        respuesta: "Las empresas y productores nos donan alimentos que no pueden vender pero que son perfectamente consumibles. Nosotros los distribuimos a través de nuestra red de organizaciones comunitarias y personas necesitadas."
    },
    {
        pregunta: "¿Puedo ser voluntario en EcoFood?",
        respuesta: "¡Sí! Siempre estamos buscando voluntarios apasionados por la causa. Visita nuestra página de contacto para más información sobre cómo unirte a nuestro equipo."
    }
];

function cargarFaqs() {
    if (document.getElementById('listaFaqs')) {
        const lista = document.getElementById('listaFaqs');
        lista.innerHTML = '';

        faqs.forEach((faq, index) => {
            const faqHTML = `
                <div class="faq-item">
                    <h3 class="faq-pregunta">${faq.pregunta}</h3>
                    <div class="faq-respuesta" id="respuesta-${index}">
                        <p>${faq.respuesta}</p>
                    </div>
                </div>
            `;
            lista.innerHTML += faqHTML;
        });

        // Mostrar solo la primera respuesta al cargar
        document.querySelectorAll('.faq-respuesta').forEach((respuesta, index) => {
            respuesta.style.display = index === 0 ? 'block' : 'none';
        });

        // Agregar event listeners para las preguntas
        document.querySelectorAll('.faq-pregunta').forEach((pregunta, index) => {
            pregunta.addEventListener('click', () => {
                const respuesta = document.getElementById(`respuesta-${index}`);
                respuesta.style.display = respuesta.style.display === 'none' ? 'block' : 'none';
            });
        });
    }
}

function validarContacto(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombreContacto').value;
    const email = document.getElementById('emailContacto').value;
    const mensaje = document.getElementById('mensajeContacto').value;
    
    if (nombre && email && mensaje) {
        // Obtener contactos existentes o crear array vacío
        const contactos = JSON.parse(localStorage.getItem('contactosEcoFood')) || [];
        
        // Agregar nuevo contacto
        contactos.push({
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: new Date().toLocaleString()
        });
        
        // Guardar en localStorage
        localStorage.setItem('contactosEcoFood', JSON.stringify(contactos));
        
        // Mostrar confirmación
        const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
        mensajeConfirmacion.innerHTML = `
            <div class="alert alert-success">
                ¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto.
            </div>
        `;
        
        // Limpiar el formulario
        document.getElementById('formContacto').reset();
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            mensajeConfirmacion.innerHTML = '';
        }, 5000);
    } else {
        alert('Por favor completa todos los campos del formulario');
    }
}

// Función para ver todos los contactos (puedes llamarla desde la consola)
function verContactos() {
    const contactos = JSON.parse(localStorage.getItem('contactosEcoFood')) || [];
    console.table(contactos);
    return contactos;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    mostrarFraseAleatoria();
    cambiarMensajeBienvenida();
    cargarFaqs();
    
    if (document.getElementById('formContacto')) {
        document.getElementById('formContacto').addEventListener('submit', validarContacto);
    }
});