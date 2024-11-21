import React, { useEffect, useReducer } from 'react'
import { filreReducer } from '../reducers/filreReducer';
import { apiRequest } from '../../api/apiRequest';

export const useFileManager = (projectId) => {
    const initialState = { files: [], isLoading: false, error: null };
    const [state, dispatch] = useReducer(filreReducer, initialState);
    
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

    useEffect(() => {
        getFiles();
    }, []);

    return { state, getFiles, addFile, deleteFile };
}
