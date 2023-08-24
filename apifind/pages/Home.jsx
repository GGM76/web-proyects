import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setPokemons] = useState([]) // Lista de pokemones
  const [search, setSearch] = useState('')

  // Llamada a la api de pokemones
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setPokemons(data.results)) // arreglo de pokemones
      .catch(error => console.error(error))
  }
  , [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPokemons = series.filter(serie => { // Lista de pokemones filtrados
    return serie.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>Home</h1>
        <form className='form-inline my-2 w-100'>
          <input
            type='text'
            className='form-control'
            placeholder='Buscar pokemon'
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className='row'>
          {
            filteredPokemons.map(serie => (

              <div className='col-4' key={serie.name}>
                <div className='card'>
                  <div className='card-body'>
                    <img
                      className='card-img-top'
                      //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                      alt={serie.name}
                    />
                    <Link
                      className='card-title'
                      to={`/serie/${serie.url.split('/')[6]}`}
                    >
                      {serie.name}
                    </Link>
                  </div>
                </div>
              </div>

            )

            )

          }

        </div>
      </div>
    </>
  )
}
export default Home
