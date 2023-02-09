import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css';
// import cloud_download from "../../cloud-download.svg";
// import { Link } from 'react-router-dom';

const Nav = ({ onSearch, handleRandomPersonaje }) => {
    return (
        <nav className={styles.head__content}>
            <div className={styles.head__nav}>
                {/* Esta etiqueta h1 es el remplazo del Home */}
                {/* <Link to="/"><h1 className={styles.head__contentTitle}>Rick&Morty</h1></Link> */}
                {/* <Link to="/about" className={styles.head__contentAbout}>Sobre mí</Link> */}
            </div>

            <div className={styles.head__group}>
                <button className={styles.head__contentButton} onClick={handleRandomPersonaje}>
                    {/* <img src={cloud_download} alt="icon bootstrap"/><i>Personaje</i> */}
                </button>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
}

export default Nav;