import Banner from "components/Banner";
import style from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import { useState, useEffect } from "react";

function Player() {
    const [video, setVideo] = useState([]);

    const parametros = useParams();
    useEffect(() => {
        fetch(`http://localhost:2000/videos?id=${parametros.id}`)
            .then((response) => response.json())
            .then((data) => {
                setVideo(...data);
            });
    }, []);

    //const video = videos.find((video) => video.id === Number(parametros.id));
    if (!video) return <NotFound />;
    return (
        <>
            <Banner img="player" color="#58B9AE"></Banner>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={style.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </section>
        </>
    );
}
export default Player;
