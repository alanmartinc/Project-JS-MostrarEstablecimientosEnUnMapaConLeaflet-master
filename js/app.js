// Instanciar ambas clases

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
     ui.mostrarEstablecimientos();
})

// Habilitar búsqueda en vivo.

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', () => {
     // Si es mayor a 5, buscar sugerencias
     if(buscador.value.length > 3) {
         // Obtener sugerencias que sean parte de la busqueda
         ui.obtenerSugerencias(buscador.value);
     } else if(buscador.value.length === 0) {
          // Mostrar los pines
          ui.mostrarEstablecimientos();
     }
});