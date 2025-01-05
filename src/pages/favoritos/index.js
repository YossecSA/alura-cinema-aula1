import Banner from "components/Banner";
import sytles from "./favoritos.module.css";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "context/Favoritos";
import Card from "components/Card";

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
        <>
            <Banner img="favoritos" color="#154580"></Banner>
            <Titulo>
                <h1>Mis Favoritos</h1>
            </Titulo>
            <section className={sytles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />;
                })}
            </section>
        </>
    );
}
export default Favoritos;
