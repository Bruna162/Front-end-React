import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './DeleteAnime.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import Button from '../form/Button';

const DeletarAnime = () => {
  const [anime, setAnime] = useState({});
  const { cod_anime } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch(`http://localhost:3000/ListaAnime/${cod_anime}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => setAnime(data))
      .catch((err) => console.log(err));
  }, [cod_anime]);


  function DeletarAnime(id_anime) {
    fetch(`http://localhost:3000/DeletarAnime/${id_anime}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.text())
      .then(() => {
        navigate('/ListAnime', { state: 'Anime excluído com sucesso!' }); 
        alert('Anime excluído com sucesso!')
      })
      .catch((err) => console.log(err));
  }

  function submit(event) {
    event.preventDefault();
    DeletarAnime(anime.id_anime); 
  }

  return (
    <section>
      <h1 className={style.texto}>Deletar Anime</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Digite o nome do anime"
          text="Nome do Anime"
          value={anime.titulo || ''}
          className={style.texto}
          disabled
        />
        <Input
          type="text"
          name="sinopse"
          id="sinopse"
          placeholder="Digite a sinopse do anime"
          text="Sinopse"
          value={anime.sinopse || ''}
          className={style.texto}
          disabled
        />
        <Input
          type="text"
          name="estudio"
          id="estudio"
          placeholder="Digite o estúdio do anime"
          text="Estúdio"
          value={anime.estudio || ''}
          className={style.texto}
          disabled
        />
        <Input
          type="text"
          name="imagem_url"
          id="imagem_url"
          placeholder="URL da imagem do anime"
          text="Imagem"
          value={anime.imagem_url || ''}
          className={style.texto}
          disabled
        />
        <Input
          type="number"
          name="episodios"
          id="episodios"
          placeholder="Total de episódios"
          text="Episódios"
          value={anime.episodios || ''}
          className={style.texto}
          disabled
        />
        <Select
          name="genero"
          text="Gênero"
          options={['Shonen', 'Seinen', 'Isekai', 'Shoujo']}
          value={anime.genero || ''}
          disabled
        
        />
        <Button label="Excluir Anime" />
      </form>
    </section>
  );
};

export default DeletarAnime;
