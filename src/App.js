import './App.css'
import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='head'>
      <div className='app'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt= "icono" />
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          />
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>

      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
