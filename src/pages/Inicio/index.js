import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera";
import Card from "components/Card";
import Pie from "components/Pie";
import Titulo from "components/Titulo";
import videos from "data/db.json"
import styles from './index.module.css'

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580"></Banner>
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {
          videos.map((video) => {
            return <Card {...video} key={video.id}/>
          })
        }
      </section>
      <Pie />
    </>
  );
}

export default Inicio;
