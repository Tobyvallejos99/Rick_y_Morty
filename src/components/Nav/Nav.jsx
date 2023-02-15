import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, handleRandomPersonaje }) => {
    return (
        <nav className={style.head__content}>
            <div className={style.head__nav}> 
                <Link to="/Home" className={style.head__contentTitle_enlace}><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
                width="500px" height="150px"/></Link>
                <img url= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"/> 
            </div>

            <div className={style.head__group}>
                <Link to="/about" className={style.head__contentAbout}>Sobre mí</Link>
                <Link to="/favorites" className={style.head__contentAbout}>Favoritos</Link>
                <SearchBar onSearch={onSearch} />
                <button className={style.head__contentAzar} onClick={handleRandomPersonaje}>
                    <i>Al Azar!</i>
                </button>
                
            </div>
        </nav>
    );
}

export default Nav;