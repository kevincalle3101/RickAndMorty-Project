import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"; 
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {
    return(
        <nav className={style.myNavBar} >
            <SearchBar onSearch = {onSearch}/>
            <button className={style.myButton}>
                <Link to = "/About">About</Link>
            </button>
            
            <button className={style.myButton}>
                <Link to= "/home">Home</Link>
            </button>
            
            <button className={style.myButton} >
                <Link to="/favorites" >Favorites</Link>
            </button>
            
            <button className={style.myButton}>
                <Link  to="/" >Log Out</Link>
            </button>
            </nav>
    )
}

export default Nav;