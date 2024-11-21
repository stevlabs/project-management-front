import { NavLink } from "react-router-dom"
import { useUser } from "../../src/hooks/useUser";
import './navBar.css'
import { useContext } from "react";
import { UserContext } from "../../src/context/UserContext";

export const NavBarAdmin = () => {
    const { logout } = useContext(UserContext)

    const handlerClick = () => {
      logout()
    }
    return (
    <ul className="App-nav-list">
        <li className="App-nav-item">
            <NavLink
                to="admin"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                PANEL ADMIN
            </NavLink>
        </li>
        <li className="App-nav-item">
            <NavLink
                to="admin/projects"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                MIS PROJECTOS
            </NavLink>
        </li>
        <li className="App-nav-item">
            <NavLink
                to="/"
                onClick={handlerClick}
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                LOGOUT
            </NavLink>
        </li>
    </ul>
    )
}
