import React, { useState } from "react";
import style from './AddAnime.module.css';

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";

const AddAnime = () => {
  const [anime, setAnime] = useState({});

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
      console.log("Anime cadastrado com sucesso:", data);
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
          type='text'
          name='titulo'
          id='titulo'
          placeholder='Nome da obra'
          handlerChange={handlerChangeAnime}
        />
        
        <Input 
          type='text'
          name='estudio'
          id='estudio'
          placeholder='Estúdio'
          handlerChange={handlerChangeAnime}
        />
        
        <Input 
          type='text'
          name='sinopse'
          id='sinopse'
          placeholder='Sinopse'
          handlerChange={handlerChangeAnime}
        />

        <Input 
          type='text'
          name='imagem_url'
          id='imagem_url'
          placeholder='URL da imagem'
          handlerChange={handlerChangeAnime}
        />

        <Input 
          type='number'
          name='episodios'
          id='episodios'
          placeholder='Quantidade de episódios'
          handlerChange={handlerChangeAnime}
        />

        <Select
          name="genero"
          id="genero"
          text="Gênero"
          options={['Shonen', 'Seinen', 'Isekai', 'Shoujo']}
          handlerChange={handlerChangeGenero}
        />

        <Button label='Adicionar Anime' />
      </form>
    </section>
  );
};

export default AddAnime;
