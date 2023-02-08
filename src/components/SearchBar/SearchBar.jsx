import styles from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={styles.head__search}> 
         <input type='search' className={styles.head__contentInput} value={character} onChange={handleChange}/>
         <button onClick={() => onSearch(character)} className={styles.head__contentButton}>Buscar</button>
      </div>
   );
}

export default SearchBar;