import { createContext, useState } from "react";
export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => setIsAuthenticated(true)
    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
    }

    return (
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