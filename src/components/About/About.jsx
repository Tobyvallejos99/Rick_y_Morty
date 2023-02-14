import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <section className={styles.contenidoHero}>
                <div>
                    <h2 className={styles.titleHero}>Buenas! soy Toby Vallejos!!</h2>
                    <h3 className={styles.leyendHero}>Estudiante y pronto full stack developer! </h3>

                    <p className={styles.descriptionHero}>
                        Soy un tecnico agronomo de 23 años con gusto particular por la programacion, la ciencia y tecnologia! estudiando en <span><a href="https://www.soyhenry.com/" target="_blank">SoyHenry</a></span>
                    </p>
                </div>

                <img src="" alt="programming" className={styles.imgHero}/>
            </section>

            <section className={styles.contenidoAbout}>
                <h3 className={styles.titleAbout}>SOBRE MI</h3>

                <p className={styles.descriptionAbout}>
                    ya tenia leves conocimientos a cerca de la programacion pero nunca tan avanzado como lo que se esta viendo en soy henry ademas de que me doy cuenta que a medida que avanzo en la carrera mas me gusta esto!
                    </p>

            </section>
        </div>
    )
}

export default About;