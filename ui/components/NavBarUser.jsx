import { NavLink } from "react-router-dom"

import './navBar.css'

export const NavBarUser = () => {
  return (
    <ul className="App-nav-list">
        <li className="App-nav-item">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                HOME PAGE
            </NavLink>
        </li>
        <li className="App-nav-item">
            <NavLink
                to="projects"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                PROJECTOS
            </NavLink>
        </li>
        <li className="App-nav-item">
            <NavLink
                to="tasks"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                TAREAS
            </NavLink>
        </li>
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
