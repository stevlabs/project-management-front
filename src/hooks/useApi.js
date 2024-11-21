import { useEffect, useState } from 'react';
import { apiRequest } from '../api/apiRequest';

export const useApi = (url, method = 'GET', body) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const makeRequest = async (customMethod = method, customBody = body) => {
        setIsLoading(true);
        try {
            const resp = await apiRequest(url, customMethod, customBody);
            console.log(resp);
            setData(resp);
            setError(null);
        } catch (error) {
            console.error(error);
            setError(error);
            throw error; 
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (method === 'GET') {
            makeRequest();
        }
    }, []);

    return { data, error, isLoading, makeRequest };
}
