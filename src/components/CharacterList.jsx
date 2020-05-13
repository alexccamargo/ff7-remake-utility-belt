import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import { translate } from 'react-i18next'

import './CharacterList.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const CharacterList = ({ characters, t }) => {
  const classes = useStyles();

  return (
    <div className="character-list">
      {
        characters.map(c => (
          <Link to={ "/character/" + c.id } key={ c.id }>
            <Paper className="character-tile" elevation={3}>
              <img className={classes.image} src={c.image} alt={t(`character.${c.id}`)} />
              <div>{t(`character.${c.id}`)}</div>
            </Paper>
          </Link>
        ))
      }
    </div >
  )
}

export default translate()(CharacterList)