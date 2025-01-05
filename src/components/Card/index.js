import styles from "./Card.module.css";
import favorito from './iconFavorito.png'

function Card({ id, capa, titulo }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={favorito} alt="Icono favorito" />
        </div>
    );
}
export default Card;
