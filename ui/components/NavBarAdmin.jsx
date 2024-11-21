import { NavLink } from "react-router-dom"
import { useUser } from "../../src/hooks/useUser";
import './navBar.css'

export const NavBarAdmin = () => {
    return (
    <ul className="App-nav-list">
        <li className="App-nav-item">
            <NavLink
                to="admin"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                ADMIN
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
    </ul>
    )
}
