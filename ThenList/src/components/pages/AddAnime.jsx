import React from "react";
import style from './AddAnime.module.css'
import { useState } from "react";

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";
const AddAnime = ()=>{

    /*CRIA A ESTRUTURA DE STATE PARA OS DADOS E LIVRO */
    const [book, setBook] = useState({}); 
     
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value});


    }

    //Captura de dados do elemento de select
    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }

    //Envio dos dados para a API
    function submit(event){
        event.preventDefault();
        console.log(book)
    };

    return(
        <section>
            <h1 className={style.texto}>Adicionar Anime</h1>

            <form onSubmit={submit}>

            <Input 
                type='nome do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Nome da obra'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type=' autor do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Studio'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type='descriçao do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Sinopse'
                handlerChange={handlerChangeBook}
            />
            <Select
                name='slc_categoria'
                id='slc_categoria'
                text='Gênero'
                handlerChange={handlerChangeCategory    }
            />
            <Button
                label='Adicionar Anime'/>
                
            </form>
        </section>
    )
}

export default AddAnime