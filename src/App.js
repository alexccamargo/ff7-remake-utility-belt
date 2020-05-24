import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import { makeStyles, AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@material-ui/core'

import TranslateIcon from '@material-ui/icons/Translate';

import CharacterListPage from './pages/CharacterListPage'
import CharacterPage from './pages/CharacterPage'
import WeaponPage from './pages/WeaponPage'

import { fetchCharacters } from './store/actions/charactersActions'
import { fetchUserData } from './store/actions/userDataActions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const dispatch = useDispatch()
  dispatch(fetchCharacters())
  dispatch(fetchUserData())

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguage = (lang) => () => {
    i18n.changeLanguage(lang)
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Final Fantasy 7 Remake - Utils
          </Typography>
          <Button color="inherit" startIcon={<TranslateIcon />} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {t("app.language")}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLanguage('en')}>English</MenuItem>
            <MenuItem onClick={handleLanguage('pt')}>Português</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box mt={2}>
        <Router>
          <Switch>
            <Route exact path="/" component={CharacterListPage} />
            <Route exact path="/characters" component={CharacterListPage} />
            <Route exact path="/character/:id" component={CharacterPage} />
            <Route exact path="/character/:id/weapon/:wpId" component={WeaponPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Box>
    </div>
  )
}

export default App
