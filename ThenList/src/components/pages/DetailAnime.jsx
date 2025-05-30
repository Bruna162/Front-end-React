import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './DetailAnime.module.css';
import ImagemAnime from '../../assets/all-anime-japanese.jpg';

const DetailAnime = () => {
  const { id_anime } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(`http://localhost:3000/ListarAnime`);
        if (!response.ok) {
          throw new Error("Erro ao buscar o anime");
        }
        const data = await response.json();
        const selectedAnime = data.find(a => a.id_anime === parseInt(id_anime));
        setAnime(selectedAnime);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnime();
  }, [id_anime]);

  const handleEdit = () => {
    navigate(`/editarAnime/${id_anime}`);
  };

  const handleDelete = () => {
    navigate(`/deletarAnime/${id_anime}`);
  };

  if (!anime) {
    return <p className={style.loading}>Carregando anime...</p>;
  }

  return (
    <div className={style.detailContainer}>
      <h1>{anime.titulo}</h1>
      <p><strong>Estúdio:</strong> {anime.estudio}</p>
      <p><strong>Gênero:</strong> {anime.genero}</p>
      <p><strong>Episódios:</strong> {anime.episodios}</p>
      <p><strong>Sinopse:</strong> {anime.sinopse}</p>

      <img src={ImagemAnime} alt={anime.titulo} className={style.image} />

      <div>
        <button onClick={handleEdit} className={style.button}>Editar</button>
      </div>
      <div>
        <button onClick={handleDelete} className={style.button}>Excluir</button>
      </div>
    </div>
  );
};

export default DetailAnime;
