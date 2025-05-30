import { useNavigate } from 'react-router-dom';
import style from './AnimeCard.module.css';

const AnimeCard = ({ id_anime, titulo, estudio, imagemPadrao }) => {
  const navigate = useNavigate();

  return (
    <div className={style.animeCard}>
      <h3 className={style.titulo}>{titulo}</h3>
      <p className={style.estudio}>{estudio}</p>
      <img
        src={imagemPadrao}
        alt={`Capa de ${titulo}`}
        className={style.animeImage}
      />
      <button
        className={style.detailButton}
        onClick={() => navigate(`/anime/${id_anime}`)}
      >
        DETALHES
      </button>
    </div>
  );
};

export default AnimeCard;
