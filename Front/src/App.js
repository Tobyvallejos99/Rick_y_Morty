import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";


function App () {
  const location = useLocation();
  const navigate = useNavigate();

  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const usu = "informatica@test.com";
  const pass = "123456";


  const login = (userData) => {
    if (userData.username === usu && userData.password === pass) {
      setAccess(true);
      navigate('/home')
    } else {
      alert("Usuario y Contraseña incorrectas");
    }
  }


  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
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
    <div className="head"> 
      { 
        location.pathname === '/' ? <Form login={login}/>
        : <header >
            <div className='container'>
              <Nav onSearch={onSearch} handleRandomPersonaje={handleRandomPersonaje}/>
            </div>
          </header>
      }
      
      <main>
        <div className='container'>
          <section>
            <Routes>
              <Route path='home' element={<Cards characters={characters} onClose={onClose} />} />
              <Route path='about' element={<About />}>Sobre mí</Route>
              <Route path='detail/:detailId' element={<Detail/>} /> 
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </section>
        </div>
      </main>

    </div>
  )
}

export default App