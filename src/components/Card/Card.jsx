import styles from './Card.module.css';

export default function Card(props) {

   return (
      <div className={styles.fondo}>
         <button onClick={props.onClose}>X</button>
         <h2 className={styles.title}>{props.name}</h2>
         <img  src={props.image} alt="" />
         <div>
            <h2 className={styles.especie}>{props.species}</h2>
            <h2 className={styles.genero}>{props.gender}</h2>
         </div>
         
      </div>

   )}
