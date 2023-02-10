import Card from '../Card/Card';
import styles from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
   return <div className={styles.cards}>
      {
         characters.map(({id, name, species, gender, image}) => { 
            return <Card 
               key={id} 
               name={name} 
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
            />
         })
      }
   </div>;
}

export default Cards;