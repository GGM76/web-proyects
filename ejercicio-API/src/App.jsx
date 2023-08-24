import { useState, useEffect } from 'react'
import './App.css'
import ListIssue from './components/ListIssue'

function App () {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')// url de trending
      .then(res => res.json())// recibo mi respuesta copleta
      .then(results => {
        setList(results)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1>Api de github</h1>
        <div>
          <table>
            <tr>
              <th>Nombre</th>
              <th>Titulo</th>
              <th>Numero</th>
            </tr>
            <tr>
              {
                list.map(list => (
                  <ListIssue
                    name={list.user.login}
                    title={list.title}
                    id={list.id}
                    labels={list.labels}
                    key={list.id}
                  />
                ))
              }
            </tr>	
          </table>
        </div>
      </div>
    </>
  )
}

export default App
