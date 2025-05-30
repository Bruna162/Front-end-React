import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import './App.css'

import Container from './components/layout/Container'

//Pages
import AddAnime from './components/pages/AddAnime'
import Home from './components/pages/Home'
import ListAnime from './components/pages/ListAnime'
import DetailAnime from './components/pages/DetailAnime'

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

                </Route>

              </Routes>

            </Container>

          </BrowserRouter>

      </div>
    </>
  )
}

export default App
