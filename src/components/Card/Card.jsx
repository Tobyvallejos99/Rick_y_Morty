import style from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({name, species, gender, image, onClose, id}) => {
   return (
      <div className={style.card}>
         <section className={style.card__head}>
            <Link to={`/detail/${id}`}> {/* si borro el / no funciona, esto va junto con el /home*/}
               <h2 className={style.card__headName}>{name}</h2>
            </Link>
            <button className={style.card__headBoton} onClick={onClose}>X</button>
         </section>

         <section>
            <img  src={image} alt={name} className={style.card__peopleIMG}/>
         </section>

         <section className={style.card__info}>
            <p className={style.card__infoSpecies}>Species: {species}</p>
            <p className={style.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export default Card;