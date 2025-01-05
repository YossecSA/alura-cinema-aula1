import Banner from "components/Banner";
import styles from "./index.module.css";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2000/videos")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);

    return (
        <>
            <Banner img="home" color="#154580"></Banner>
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />;
                })}
            </section>
        </>
    );
}

export default Inicio;
