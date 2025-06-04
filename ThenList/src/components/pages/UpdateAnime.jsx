import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import style from './UpdateAnime.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const UpdateAnime = () => {
  const [anime, setAnime] = useState({});
  const { cod_anime } = useParams();
  const navigate = useNavigate();

  function handleChange(event) {
    setAnime({ ...anime, [event.target.name]: event.target.value });
  }

  function handleChangeCategory(event) {
    setAnime({ ...anime, genero: event.target.value });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/ListaAnime/${cod_anime}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(resp => resp.json())
      .then(data => setAnime(data))
      .catch(err => console.log(err));
  }, [cod_anime]);

  function updateAnime(anime) {
    fetch(`http://localhost:3000/AtualizarAnime/${anime.id_anime}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(anime)
    })
      .then(resp => resp.text())
      .then(() => {
        navigate('/ListAnime', { state: 'Anime alterado com sucesso!' });
      })
      .catch(err => console.log(err));
  }

  function submit(event) {
    event.preventDefault();
    updateAnime(anime);
  }

  return (
    <section>
      <h1 className={style.texto}>Alterar Anime</h1>
      <form onSubmit={submit}>
        <Input
          type='text'
          name='titulo'
          id='titulo'
          placeholder='Digite o nome do anime'
          text='Nome do Anime'
          handlerChange={handleChange}
          value={anime.titulo || ''}
          className={style.texto}
        />
        <Input
          type='text'
          name='sinopse'
          id='sinopse'
          placeholder='Digite a sinopse do anime'
          text='Sinopse'
          handlerChange={handleChange}
          value={anime.sinopse || ''}
          className={style.texto}
        />
        <Input
          type='text'
          name='estudio'
          id='estudio'
          placeholder='Digite o estúdio do anime'
          text='Estúdio'
          handlerChange={handleChange}
          value={anime.estudio || ''}
          className={style.texto}
        />
        <Input
          type='text'
          name='imagem_url'
          id='imagem_url'
          placeholder='URL da imagem do anime'
          text='Imagem'
          handlerChange={handleChange}
          value={anime.imagem_url || ''}
          className={style.texto}
        />
        <Input
          type='number'
          name='episodios'
          id='episodios'
          placeholder='Total de episódios'
          text='Episódios'
          handlerChange={handleChange}
          value={anime.episodios || ''}
          className={style.texto}
        />
        <Select
          name='genero'
          text='Gênero'
          options={['Shonen', 'Seinen', 'Isekai', 'Shoujo']}
          handlerChange={handleChangeCategory}
          value={anime.genero || ''}
        />
        <Button label='Editar Anime' />
      </form>
    </section>
  );
};

export default UpdateAnime;
