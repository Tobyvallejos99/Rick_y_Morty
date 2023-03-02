import style from './Card.module.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { addFavorite, removeFavorite } from "../../redux/actions/index";

const Card = ({name, species, gender, image, onClose, id}) => {

   const [isFav, setFav] = React.useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

      function handleFavorite() {
      if (isFav) {
         setFav(false);
         dispatch(removeFavorite(id));
      } else {
         setFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}));
      }
   }

      React.useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
      }, [myFavorites]);

   return (
      <div className={style.card}>
            {isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )}
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