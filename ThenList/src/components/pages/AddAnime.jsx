import React, { useState } from "react";
import style from './AddAnime.module.css';
import { useNavigate } from 'react-router-dom'

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";

const AddAnime = () => {
  const [anime, setAnime] = useState({});
  const navigate = useNavigate();

  function handlerChangeAnime(event) {
    setAnime({ ...anime, [event.target.name]: event.target.value });
  }

  function handlerChangeGenero(event) {
    setAnime({ ...anime, genero: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    console.log(anime);

    fetch('http://localhost:3000/InserirAnime', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anime),
    }).then(response => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar anime.");
      }
      return response.text();
    }).then(data => {
      navigate('/ListAnime', { state: 'Anime cadastrado com sucesso' }); 
      alert('Anime cadastrado com sucesso')
    })
    .catch(error => {
      console.error("Erro:", error);
    });
  }

  return (
    <section>
      <h1 className={style.texto}>Adicionar Anime</h1>

      <form onSubmit={submit}>
        <Input 
          text='Nome do Anime'
          type='text'
          name='titulo'
          id='titulo'
          placeholder='Nome da obra'
          handlerChange={handlerChangeAnime}
        />
        
        <Input 
          text='Estudio'
          type='text'
          name='estudio'
          id='estudio'
          placeholder='Estúdio'
          handlerChange={handlerChangeAnime}
        />
        
        <Input 
          text='Sinopse'
          type='text'
          name='sinopse'
          id='sinopse'
          placeholder='Sinopse'
          handlerChange={handlerChangeAnime}
        />

        <Input 
          text='Imagem'
          type='text'
          name='imagem_url'
          id='imagem_url'
          placeholder='URL da imagem'
          handlerChange={handlerChangeAnime}
        />

        <Input 
         text='Episódios'
          type='number'
          name='episodios'
          id='episodios'
          placeholder='Quantidade de episódios'
          handlerChange={handlerChangeAnime}
        />

        <Select
          text="Gênero"
          name="genero"
          id="genero"
          options={['Shonen', 'Seinen', 'Isekai', 'Shoujo']}
          handlerChange={handlerChangeGenero}
        />

        <Button label='Adicionar Anime' />
      </form>
    </section>
  );
};

export default AddAnime;
