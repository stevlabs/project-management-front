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
                HOME PAGE
            </NavLink>
        </li>
        {/* Enlace a la sección de proyectos */}
        <li className="App-nav-item">
            <NavLink
                to="projects"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                PROJECTOS
            </NavLink>
        </li>
        {/* Enlace a la sección de tareas */}
        <li className="App-nav-item">
            <NavLink
                to="tasks"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                TAREAS
            </NavLink>
        </li>
        {/* Enlace para iniciar sesión */}
        <li className="App-nav-item">
            <NavLink
                to="login"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                LOGIN
            </NavLink>
        </li>
    </ul>
  )
}
