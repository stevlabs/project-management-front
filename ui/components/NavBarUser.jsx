import { NavLink } from "react-router-dom"
import './navBar.css'

// Componente de barra de navegación para users.
export const NavBarUser = () => {
  return (
    <ul className="App-nav-list">
        {/* Enlace a la página de inicio */}
        <li className="App-nav-item">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                PAGINA DE INCIO
            </NavLink>
        </li>
        {/* Enlace para iniciar sesión */}
        <li className="App-nav-item">
            <NavLink
                to="login"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                INICIAR SESION
            </NavLink>
        </li>
            {/* Enlace para iniciar sesión */}
                <li className="App-nav-item">
            <NavLink
                to="register"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                REGISTRO
            </NavLink>
        </li>
    </ul>
  )
}
