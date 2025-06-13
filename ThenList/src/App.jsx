import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

//Pages
import AddAnime from './components/pages/AddAnime'
import Home from './components/pages/Home'
import ListAnime from './components/pages/ListAnime'
import DetailAnime from './components/pages/DetailAnime'
import UpdateAnime from './components/pages/UpdateAnime'
import DeletarAnime from './components/pages/DeleteAnime'

//Layout
import NavBar from './components/layout/NavBar'



function App() {

  return (
    <>
      <div>
          <BrowserRouter>

            <Container>

              <Routes>

                <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/AddAnime' element={<AddAnime />} />
                <Route path='/ListAnime' element={<ListAnime />} />
                <Route path='/anime/:id_anime' element={<DetailAnime />} />
                <Route path='/editarAnime/:cod_anime' element={<UpdateAnime />} />
                <Route path='/DeletarAnime/:cod_anime' element={<DeletarAnime />} />

                </Route>

              </Routes>

            </Container>

          </BrowserRouter>

      </div>
    </>
  )
}

export default App
