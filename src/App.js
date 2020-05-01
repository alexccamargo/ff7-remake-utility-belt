import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import CharacterListPage from './pages/CharacterListPage'
import CharacterPage from './pages/CharacterPage'
import WeaponPage from './pages/WeaponPage'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterListPage} />
        <Route exact path="/characters" component={CharacterListPage} />
        <Route exact path="/character/:id" component={CharacterPage} />
        <Route exact path="/character/:id/weapon/:wpId" component={WeaponPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
