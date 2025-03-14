import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
        <>
        
            <nav className={style.navbar}>

                <ul>
                    

                    <Link to='/'>
                        <li className={style.item_a}>Menu</li>
                    </Link>
                    
                    <Link to='/AddAnime'>
                        <li  className={style.item_a}>Adicionar Anime</li>
                    </Link>
                    

                    <Link to='/ListAnime'>
                        <li  className={style.item_a}>Lista de Animes</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar