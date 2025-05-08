import React, { useState, useEffect } from "react";
import style from './ListAnime.module.css';

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
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section>
      <h1 className={style.texto}>Lista de Animes</h1>

      <button className={style.button} onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Animes' : 'Mostrar Animes'}
      </button>

      {isVisible && (
        <div className={style.animeList}>
          {animes.length > 0 ? (
            animes.map(anime => (
              <div key={anime.id_anime} className={style.animeCard}>
                <h2>{anime.titulo}</h2>
                <p><strong>Estúdio:</strong> {anime.estudio}</p>
                <p><strong>Gênero:</strong> {anime.genero}</p>
                <p><strong>Sinopse:</strong> {anime.sinopse}</p>
                <p><strong>Episódios:</strong> {anime.episodios}</p>
                {anime.imagem_url && <img src={anime.imagem_url} alt={anime.titulo} className={style.animeImage} />}
              </div>
            ))
          ) : (
            <p className={style.noAnime}>Não há animes cadastrados.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ListAnime;
