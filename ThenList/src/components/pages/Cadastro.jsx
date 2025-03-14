import styles from "./Cadastro.module.css"

const Cadastro = () => {
    <div>
        <form>
            <h1>Cadastre-se</h1>
            <input name="nome" type="text"/>
            <input name="data de nascimento" type="date"/>
            <input name="email" type="email"/>
            <input name="senha" type="password"/>
            <button type="button">Cadastrar</button>
        </form>
    </div>

}

export default Cadastro