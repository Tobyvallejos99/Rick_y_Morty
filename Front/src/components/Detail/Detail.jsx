import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {

	const { detailId } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
			.then((response) => response.json())
			.then((char) => { 
				if (char.name) {
					setCharacter(char); 
				} else {
					alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				alert("No hay personajes con ese ID");
			});
		return setCharacter({});
	}, [detailId])

	return(
		<div class={style.detailCharacter}>
			<article className={style.dataCharacter}>
				<div className={style.infoCharacter}>
					<h2>NOMBRE: {character.name}</h2>
					<h3>ESTADO: {character.status}</h3>
					<h3>ESPECIE: {character.species}</h3>
					<h3>GENERO: {character.gender}</h3>
					<h3>ORIGEN: {character?.origin?.name}</h3> 
				</div>
				<div>
					<img src={character.image} alt={character.name} className={style.imgCharacter} />
				</div>
			</article>
		</div>
	)
}


export default Detail;