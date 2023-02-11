import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import About from "./components/About/About";
import Error404 from "./components/Error/Error404";
import Detail from "./components/Detail/Detail";

function App () {
  const [characters, setCharacters]= useState([]);


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => { 
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No existe personaje con ese ID');
        }
    })
  }


  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  }
  
  const handleRandomPersonaje = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const random = Math.floor(Math.random() * data.results.length);
      setCharacters((oldChars) => [...oldChars, data.results[random]]);
    });
  }


  return (
    <div className = "head">
    <header>
      <div>
        <Nav onSearch={onSearch} handleRandomPersonaje={handleRandomPersonaje}/>
      </div>
    </header>


    <main>
      <div className='container'>
        <section>
          <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />}>Sobre mí</Route>
            <Route path='detail/:detailId' element={<Detail />} /> 
            <Route path=":error" element={<Error404 />}/>
          </Routes>
        </section>
      </div>
    </main>

  </div>
  )
}

export default App
