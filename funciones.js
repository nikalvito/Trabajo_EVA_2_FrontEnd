
const productos = [
    {
        nombre: "Canasta de Frutas de Temporada",
        descripcion: "Selección de frutas frescas recolectadas hoy mismo",
        precio: "$5.990",
        imagen: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Array de comentarios iniciales
let comentarios = [
    {
        nombreUsuario: "María González",
        textoComentario: "Excelente iniciativa, he reducido mi desperdicio de alimentos significativamente gracias a EcoFood.",
        fecha: "15/05/2023"
    },
    {
        nombreUsuario: "Carlos Muñoz",
        textoComentario: "Los productos son de excelente calidad y a muy buen precio. Además, ayudamos a reducir el desperdicio.",
        fecha: "22/05/2023"
    }
];

// Función para cargar productos en la página home.html
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

// Función para ver detalles de producto (simulada)
function verDetalle(nombreProducto) {
    alert(`Detalles de ${nombreProducto}\nPróximamente más información...`);
}

// Función para cargar comentarios en la página comentarios.html
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

// Función para agregar un nuevo comentario
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
        
        comentarios.unshift(nuevoComentario); // Agregar al inicio del array
        document.getElementById('formComentario').reset();
        cargarComentarios();
        
        // Mostrar mensaje de éxito
        const mensaje = document.createElement('div');
        mensaje.className = 'alert alert-success';
        mensaje.textContent = '¡Comentario publicado con éxito!';
        document.getElementById('formComentario').appendChild(mensaje);
        
        setTimeout(() => mensaje.remove(), 3000);
    } else {
        alert('Por favor completa todos los campos');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    cargarComentarios();
    
    if (document.getElementById('formComentario')) {
        document.getElementById('formComentario').addEventListener('submit', agregarComentario);
    }
});