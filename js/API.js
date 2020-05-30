class API {
     async obtenerDatos() {
          // Obtener desde la API
          const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

          // Retornar como JSON
          const respuestaJSON = await datos.json();

          // Retornar el objeto
          return {
               respuestaJSON
          }
     }
}