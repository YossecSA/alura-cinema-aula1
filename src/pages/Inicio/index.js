import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera";
import Card from "components/Card";
import Pie from "components/Pie";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580"></Banner>
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <Card id="1" titulo="gato" capa=""/>
      <Pie />
    </>
  );
}

export default Inicio;
