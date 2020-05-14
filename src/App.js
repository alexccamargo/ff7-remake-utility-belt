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

import { fetchCharacters } from './store/actions/charactersActions'
import { fetchUserData } from './store/actions/userDataActions'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  dispatch(fetchCharacters())
  dispatch(fetchUserData())

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
