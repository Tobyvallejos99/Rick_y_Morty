import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css';
// import cloud_download from "../../cloud-download.svg";
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, handleRandomPersonaje }) => {
    return (
        <nav className={style.head__content}>
            <div className={style.head__nav}>
                {/* Esta etiqueta h1 es el remplazo del Home */}
                <Link to="/" className={style.head__contentTitle_enlace}><h1 className={style.head__contentTitle}></h1></Link>
                <Link to="/about" className={style.head__contentAbout}>Sobre mí</Link>
            </div>

            <div className={style.head__group}>
                {/* <button className={style.head__contentButton} onClick={handleRandomPersonaje}>
                    <img src={cloud_download} alt="icon bootstrap"/><i>Personaje</i>
                </button> */}
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
}

export default Nav;