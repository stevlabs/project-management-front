import { useContext } from 'react';
import { UserContext } from '../context/UserContext'

// Hook personalizado para manejar el contexto del usuario
export const useUser = () => {
    // Retorna el contexto del usuario
    return useContext(UserContext);
}