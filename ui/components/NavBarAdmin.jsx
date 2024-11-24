import { NavLink } from "react-router-dom"
import { useUser } from "../../src/hooks/useUser";
import './navBar.css'
import { useContext } from "react";
import { UserContext } from "../../src/context/UserContext";

// Componente de barra de navegación para admin.
export const NavBarAdmin = () => {
    // Accedemos a logout desde el contexto del usuario.
    const { logout } = useContext(UserContext)

    // Función para manejar el clic en "Logout".
    const handlerClick = () => {
      logout(); // Cerramos la sesión.
    }

    return (
    <ul className="App-nav-list">
        {/* Enlace al panel de administración */}
        <li className="App-nav-item">
            <NavLink
                to="admin"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                PANEL ADMIN
            </NavLink>
        </li>
        {/* Enlace a la sección de proyectos del admin */}
        <li className="App-nav-item">
            <NavLink
                to="admin/projects"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                MIS PROJECTOS
            </NavLink>
        </li>
        {/* Enlace para cerrar sesión */}
        <li className="App-nav-item">
            <NavLink
                to="/"
                onClick={handlerClick}
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                CERRAR SESION
            </NavLink>
        </li>
    </ul>
    )
}
