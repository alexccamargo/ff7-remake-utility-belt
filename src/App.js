import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import CharactersPage from './pages/CharactersPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharactersPage} />
        <Route exact path="/characters" component={CharactersPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
