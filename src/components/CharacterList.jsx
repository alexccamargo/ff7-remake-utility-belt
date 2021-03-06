import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './CharacterList.css'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  media: {
  },
})

const CharacterList = ({ characters }) => {
  const classes = useStyles()
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      {
        characters.map(c => (
          <Grid key={c.id} item xs={12} sm={6} md={3}>
            <Link to={"/character/" + c.id} key={c.id}>
              <Paper className="character-tile" elevation={3}>
                <img className={classes.image} src={c.image} alt={t(`character.${c.id}`)} />
                <div>{t(`character.${c.id}`)}</div>
              </Paper>
            </Link>
          </Grid>
        ))
      }
    </Grid>

  )
}

export default CharacterList
