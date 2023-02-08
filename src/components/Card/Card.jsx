import styles from './Card.module.css';

const Card = ({name, species, gender, image, onClose}) => {
   return (
      <div className={styles.card}>
         <section className={styles.card__head}>
            <p className={styles.card__headName}>{name}</p>
            <button className={styles.card__headBoton} onClick={onClose}>X</button>
         </section>

         <section>
            <img  src={image} alt={name} className={styles.card__peopleIMG}/>
         </section>

         <section className={styles.card__info}>
            <p className={styles.card__infoSpecies}>Species: {species}</p>
            <p className={styles.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export default Card;