import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

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



  return (
    <div className="body">
      <div  className='head'>

        <div className='app'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt= "icono" />
        </div>

        <Nav onSearch={onSearch}/>

        <div>
          <Cards
            onClose={onClose}
            characters={characters}
          />
        </div>
      </div>
    </div>
  )
}

export default App
