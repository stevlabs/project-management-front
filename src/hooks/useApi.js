import { useEffect, useState } from 'react';
import { apiRequest } from '../api/apiRequest';

/**
 * Hook personalizado para manejar solicitudes API.
 * @param {string} url - La URL de la API a la que se hará la solicitud.
 * @param {string} method - El método HTTP a utilizar (por defecto es 'GET').
 * @param {Object} body - El cuerpo de la solicitud (opcional).
 * @returns {Object} - Estado de la solicitud: data, error, isLoading, y makeRequest para solicitudes personalizadas.
 */
export const useApi = (url, method = 'GET', body) => {
    // Estado para almacenar los datos de la respuesta
    const [data, setData] = useState([]);
    // Estado para manejar errores
    const [error, setError] = useState(null);
    // Estado para manejar la carga
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Realiza una solicitud API con opciones personalizadas.
     * @param {string} customMethod - Método HTTP.
     * @param {Object} customBody - Cuerpo de la solicitud.
     */
    const makeRequest = async (customMethod = method, customBody = body) => {
        setIsLoading(true);
        try {
            // Hacer la solicitud
            const resp = await apiRequest(url, customMethod, customBody);
            console.log(resp);
            // Actualizar estado con la respuesta
            setData(resp);
            // Limpiar cualquier error previo
            setError(null);
        } catch (error) {
            console.error(error);
            // Almacenar el error en el estado
            setError(error);
            throw error; 
        } finally {
            // Indicar que la solicitud ha terminado
            setIsLoading(false);
        }
    };
        
    // Efecto para ejecutar automáticamente la solicitud cuando el hook se monta
    useEffect(() => {
        if (method === 'GET') {
            makeRequest();
        }
    }, []);

    return { data, error, isLoading, makeRequest };
}
