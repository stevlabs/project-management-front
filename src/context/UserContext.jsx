import { createContext, useState } from "react";


// Crear el contexto para compartir datos entre componentes
export const UserContext = createContext()

/**
 * Proveedor del UserContext para manejar la autenticación y la información del usuario.
 * @param {Object} children - Componentes hijos que necesitan acceso al contexto.
 */
export const UserProvider = ({ children }) => {
    // Estado para almacenar los datos del usuario
    const [user, setUser] = useState({})
    // Estado para manejar la autenticación
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    /**
     * Inicia sesión estableciendo el estado de autenticación en true.
     */
    const login = () => setIsAuthenticated(true)
    /**
     * Cierra sesión restableciendo los estados de autenticación y usuario.
     */
    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
    }

    return (
        // Proveer datos y funciones al contexto
        <UserContext.Provider value={{
            mensaje: 'Prueba context',
            user,
            setUser,
            isAuthenticated,
            login,
            logout

        }}>
            {children}
        </UserContext.Provider>
    )
}