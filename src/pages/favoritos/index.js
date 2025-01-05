import Banner from "components/Banner";
import sytles from "./favoritos.module.css";
import Titulo from "components/Titulo";

function Favoritos() {
    return (
        <>
            <Banner img="favoritos" color="#154580"></Banner>
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
        </>
    );
}
export default Favoritos;
