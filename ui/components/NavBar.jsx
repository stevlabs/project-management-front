import { useUser } from "../../src/hooks/useUser";
import { NavBarAdmin } from "./NavBarAdmin";
import { NavBarUser } from "./NavBarUser";
import './navBar.css'

export const NavBar = () => {
    // Verificamos si el usuario está autenticado.
    const { isAuthenticated } = useUser();
    return (
        <nav className="App-nav">
            {/* Si está autenticado mostramos la barra de admin, si no la de usuario */}
            {isAuthenticated ? <NavBarAdmin /> : <NavBarUser />}
        </nav>
    )
}
