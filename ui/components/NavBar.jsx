import { NavLink } from "react-router-dom"

import './navBar.css'

export const NavBar = () => {
  return (
    <ul>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                HomePage
            </NavLink>
        </li>
        <li>
            <NavLink
                to="projects"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Projectos
            </NavLink>
        </li>
        <li>
            <NavLink
                to="tasks"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Tareas
            </NavLink>
        </li>
        <li>
            <NavLink
                to="login"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="admin"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Admin
            </NavLink>
        </li>
    </ul>
  )
}
