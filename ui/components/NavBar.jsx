import { useUser } from "../../src/hooks/useUser";
import { NavBarAdmin } from "./NavBarAdmin";
import { NavBarUser } from "./NavBarUser";
import './navBar.css'

export const NavBar = () => {
    const { isAuthenticated } = useUser();
    return (
        <nav className="App-nav">
            {isAuthenticated ? <NavBarAdmin /> : <NavBarUser />}
        </nav>
    )
}
