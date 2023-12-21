import SearchBar from "../SearchBar/SearchBar";
import { NavLink,  useLocation } from "react-router-dom";
import style from "./Nav.module.css"
import imageLogo from './r&m.png'

const Nav = ({ onSearch }) => {
    const location = useLocation();
    return (
        <nav className={style.myNavBar} >
            <img
                className={style.image}
                src={imageLogo}
                alt="logo rick and morty"
            />
                <NavLink to="/About" className={style.linkButton} activeClassName={style.activeLink}>About</NavLink>
                <NavLink to="/home" className={style.linkButton} activeClassName={style.activeLink}>Home</NavLink>
                <NavLink to="/favorites" className={style.linkButton} activeClassName={style.activeLink}>Favorites</NavLink>
                <NavLink to="/" className={style.linkButton} activeClassName={style.activeLink}>Log Out</NavLink>
                {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
        </nav>
    )
}

export default Nav;