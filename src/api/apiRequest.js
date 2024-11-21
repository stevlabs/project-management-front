/**
 * Función para realizar solicitudes a una API.
 * 
 * @param {string} url - La URL a la que se realizará la solicitud.
 * @param {string} method - El método HTTP a utilizar.
 * @param {Object} body - Los datos que se enviarán en la solicitud.
 * @returns {Promise<Object>} - Una promesa que resuelve los datos de la respuesta de la API en formato JSON.
 * @throws {Error} - Lanza un error si la solicitud falla.
 */
export const apiRequest = async (url, method = 'GET', body) => {
  try {
     // Configuración de la solicitud
    const options = { method }
    // Si el body es FormData, lo asignamos directamente
    if (body && body instanceof FormData) {
      options.body = body;
      // Si el body es un objeto, lo convertimos a JSON
    } else if (body) {
      options.headers = {
        'Content-Type': 'application/json'
      };
      options.body = JSON.stringify(body);
    }
    // Realizar la solicitud
    const response = await fetch(url, options);
    // Verificar si la respuesta es exitosa
    if (!response.ok) throw ("Error en la api.");
    // Devolver la respuesta en formato JSON
    return response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}
