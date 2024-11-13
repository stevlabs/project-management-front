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
                Admin
            </NavLink>
        </li>
    </ul>
    )
}
