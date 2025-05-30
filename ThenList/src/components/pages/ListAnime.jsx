import React, { useState, useEffect } from "react";
import style from './ListAnime.module.css';
import ImagemAnime from '../../assets/all-anime-japanese.jpg';

import AnimeCard from "../../AnimeCard";
import Container from "../layout/Container";

const ListAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      fetchAnimes();
    }
  }, [isVisible]);

  const fetchAnimes = async () => {
    try {
      const response = await fetch('http://localhost:3000/ListarAnime');
      if (!response.ok) {
        throw new Error("Erro ao carregar a lista de animes.");
      }
      const data = await response.json();
      setAnimes(data);
      console.log("Animes carregados:", data); // para debug
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={style.anime_home}>
      <h1 className={style.texto}>Lista de Animes</h1>

      <div className={style.buttonWrapper}>
        <button className={style.button} onClick={toggleVisibility}>
          {isVisible ? 'Ocultar Animes' : 'Mostrar Animes'}
        </button>
      </div>

      {isVisible && (
        <Container>
          {animes.length > 0 ? (
            <div className={style.animeList}>
              {animes.map(anime => (
                <AnimeCard
                  key={anime.id_anime}
                  id_anime={anime.id_anime}
                  titulo={anime.titulo}
                  estudio={anime.estudio}
                  imagemPadrao={ImagemAnime}  
                />
              ))}
            </div>
          ) : (
            <p className={style.noAnime}>Não há animes cadastrados.</p>
          )}
        </Container>
      )}
    </section>
  );
};

export default ListAnime;
