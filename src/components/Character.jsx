import React from 'react'
import { Link } from "react-router-dom"
import { translate } from 'react-i18next'
import { ListItem, List, Box, Typography, Paper, makeStyles } from '@material-ui/core'
import { getStats, getConnectedAndSingleMateriaCounts, getTotalSP } from '../shared/StatsCalculator'
import BasicStatsTable from './Weapon/BasicStatsTable'
import MateriaSlots from './MateriaSlots'

const useStyles = makeStyles({
  title: {
    paddingBottom: "1.5rem"
  },
})

const Character = ({ t, character, weaponsUserData, totalSP }) => {
  const classes = useStyles()
  const weapons = character.weapons || []

  const renderWeaponLink = (wpId) => {
    const weapon = weapons[wpId]
    const effects = (weaponsUserData[`${character.id}${wpId}`] || {}).effects
    const stats = getStats(weapon, effects)
    const effectTotalSP = getTotalSP(weapon, effects)
    const materiaState = getConnectedAndSingleMateriaCounts(weapon, stats)

    return (
      <ListItem key={wpId}>
        <Paper className="width-100" elevation={3}>
          <Box mb={2} p={3}>
            <Typography className={classes.title} variant="h5" mb={1}>
              <Link to={`/character/${character.id}/weapon/${wpId}`} >
                {t(`weapon.${character.id}.${wpId}.name`)}
              </Link>
              <Box display={"inline-block"} position={"relative"} top={10} ml={3}>
                <MateriaSlots singleMateria={materiaState.singleMateria} connectedMateria={materiaState.connectedMateria}></MateriaSlots>
              </Box>
              <Box display={"inline-block"} position={"relative"} top={2} ml={3}>SP Remaing: {totalSP - effectTotalSP}</Box>
            </Typography>
            <BasicStatsTable stats={stats}></BasicStatsTable>
          </Box>
        </Paper>
      </ListItem>
    )
  }

  return (
    <div>
      <List>
        {
          Object.keys(weapons).map(wpId => renderWeaponLink(wpId))
        }
      </List>
    </div>
  )
}

export default translate()(Character)
