import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import imageLogo from './r&m.png'

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.myNavBar} >
            <img
                className={style.image}
                src={imageLogo}
                alt="logo rick and morty"
            />
            <SearchBar onSearch={onSearch} />
            <button className={style.myButton}>
                <Link to="/About">About</Link>
            </button>

            <button className={style.myButton}>
                <Link to="/home">Home</Link>
            </button>

            <button className={style.myButton} >
                <Link to="/favorites" >Favorites</Link>
            </button>

            <button className={style.myButton}>
                <Link to="/" >Log Out</Link>
            </button>
        </nav>
    )
}

export default Nav;