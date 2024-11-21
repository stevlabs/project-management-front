import React, { useEffect, useReducer } from 'react'
import { filreReducer } from '../reducers/filreReducer';
import { apiRequest } from '../../api/apiRequest';

/**
 * Hook para gestionar recursos de un proyecto.
 * 
 * @param {number} projectId - El ID del proyecto.
 * @returns {Object} - Estado y funciones para gestionar los archivos.
 */
export const useFileManager = (projectId) => {
    const initialState = { files: [], isLoading: false, error: null };
    const [state, dispatch] = useReducer(filreReducer, initialState);
    
    /**
     * Obtiene los archivos del proyecto.
     */
    const getFiles = async () => {
        const url = `${import.meta.env.VITE_URL_BASE}/project/${projectId}/resources`;
        try {
            dispatch({ type: 'FETCH_START' });
            const result = await apiRequest(url, 'GET');
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    /**
     * Añade un archivo al proyecto.
     * 
     * @param {File} file - El archivo a subir.
     * @param {number} userId - El ID del usuario que sube el archivo.
     */
    const addFile = async (file, userId) => {
        const uploadUrl = `${import.meta.env.VITE_URL_BASE}/project/${projectId}/upload`;
        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('file', file);
        try {
            const result = await apiRequest(uploadUrl, 'POST', formData);
            dispatch({ type: 'ADD_FILE', payload: result.data });
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            throw error;
        }
    };

    /**
     * Elimina un archivo del proyecto.
     * 
     * @param {number} fileId - El ID del archivo a eliminar.
     */
    const deleteFile = async (fileId) => {
        const deleteUrl = `${import.meta.env.VITE_URL_BASE}/resource/${fileId}`;
        try {
            await apiRequest(deleteUrl, 'DELETE');
            dispatch({ type: 'DELETE_FILE', payload: fileId });
        } catch (error) {
            console.error('Error al eliminar el archivo:', error);
            throw error;
        }
    };

    // Cargar los archivos al inicializar el hook
    useEffect(() => {
        getFiles();
    }, []);

    return { state, getFiles, addFile, deleteFile };
}
