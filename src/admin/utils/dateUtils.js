/**
 * Función para formatear una fecha a DD/MM/YYYY
 * 
 * @param {string} dateString - Fecha en formato ISO 8601
 * @returns {string} - Fecha formateada en DD/MM/YYYY
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES");
};

/**
 * Función para convertir una fecha ISO a formato YYYY-MM-DD para inputs de tipo date.
 * 
 * @param {string} dateString - Fecha en formato ISO 8601
 * @returns {string} - Fecha formateada en YYYY-MM-DD
 */
export const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};
