import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './Characters.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});


export const Characters = ({ characters }) => {
  const classes = useStyles();

  return (
    <div>
      {
        characters.map(c => <Paper className="character-tile" elevation={3}>
          <img className={classes.image} src={c.image} alt={c.name} />
          <div>{c.name}</div>
        </Paper>)
      }
    </div >

  )
}
