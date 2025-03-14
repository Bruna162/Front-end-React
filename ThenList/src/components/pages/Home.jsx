import styles from './Home.module.css';


function Home() {
  return ( 
    <div className={styles.caixa}>
      
      <h1 className={styles.titulo}>Bem Vindo ao ThenList</h1>
      <h3 className={styles.texto}>
        "Bem-vindo ao seu novo refúgio de animes! 🎉
        <br />
        Aqui, você pode assistir aos seus animes favoritos e acompanhar suas séries preferidas, tudo em um só lugar. 
        Organize sua lista, marque os episódios que já assistiu e descubra novas aventuras para explorar!
        <br />
        Seja você um fã de longa data ou um novato no mundo dos animes, temos algo especial esperando por você. 
        Prepare-se para embarcar em uma jornada épica com seus animes preferidos. 🚀✨
      </h3>
      </div>

  );
}

export default Home;
