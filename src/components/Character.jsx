import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { translate } from 'react-i18next'
import { TextField, ListItem, List, Box, Typography, Paper, makeStyles } from '@material-ui/core'
import { getStats } from '../shared/StatsCalculator'
import BasicStatsTable from './Weapon/BasicStatsTable'

const useStyles = makeStyles({
  title: {
    paddingBottom: "1.5rem"
  },
})

const Character = ({ t, character, weaponsUserData, spAmount, onSPChange }) => {
  const classes = useStyles()
  const weapons = character.weapons || []
  const [totalSP, setTotalSP] = useState(spAmount)

  const handleTotalSPChange = (e) => {
    setTotalSP(e.target.value)
    onSPChange(e.target.value)
  }

  const getWeaponStats = (id) => {
    const wUserData = weaponsUserData[`${character.id}${id}`] || {}
    return getStats(weapons[id], wUserData.effects)
  }

  const renderWeaponLinks = () => {
    return (
      <List>
        {
          Object.keys(weapons).map(wpId => (
            <ListItem key={wpId}>
              <Paper className="width-100" elevation={3}>
                <Box mb={2} p={3}>
                  <Typography className={classes.title} variant="h5" mb={1}>
                    <Link to={`/character/${character.id}/weapon/${wpId}`}>
                      {t(`weapon.${character.id}.${wpId}.name`)}
                    </Link>
                  </Typography>
                  <BasicStatsTable stats={getWeaponStats(wpId)}></BasicStatsTable>
                </Box>
              </Paper>
            </ListItem>
          ))
        }
      </List>
    )
  }

  return (
    <div>
      <TextField id="standard-basic" label="Total SP:" value={totalSP} onChange={handleTotalSPChange} />
      {renderWeaponLinks()}
    </div>
  )
}

export default translate()(Character)
