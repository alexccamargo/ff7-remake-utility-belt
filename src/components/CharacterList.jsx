import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';

import './CharacterList.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});


export const CharacterList = ({ characters }) => {
  const classes = useStyles();

  return (
    <div className="character-list">
      {
        characters.map(c => (
          <Link to={ "/character/" + c.id } key={ c.id }>
            <Paper className="character-tile" elevation={3}>
              <img className={classes.image} src={c.image} alt={c.name} />
              <div>{c.name}</div>
            </Paper>
          </Link>
        ))
      }
    </div >

  )
}
