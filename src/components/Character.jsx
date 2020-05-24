import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { ListItem, List, Box, Typography, Paper, makeStyles } from '@material-ui/core'
import { getStats, getConnectedAndSingleMateriaCounts, getTotalSP } from '../shared/StatsCalculator'
import BasicStatsTable from './Weapon/BasicStatsTable'
import MateriaSlots from './MateriaSlots'

const useStyles = makeStyles({
  title: {
    paddingBottom: "1rem"
  },
  materiaLabel: {
    fontSize: "16px",
    display: "inline-block",
    paddingBottom: "0.5rem"
  }
})

const Character = ({ character, weaponsUserData, totalSP }) => {
  const { t } = useTranslation();

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
            <Typography className={classes.title} variant="h5">
              <Link to={`/character/${character.id}/weapon/${wpId}`} >
                {t(`weapon.${character.id}.${wpId}.name`)}
              </Link>
            </Typography>
            <Box>
              <Typography className={classes.materiaLabel} variant="subtitle1"><strong>{t("common.SP-remaing")}: </strong>{totalSP - effectTotalSP}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"top"} mb={2}>
              <Typography className={classes.materiaLabel} variant="subtitle1"><strong>{t("common.materia-slots")}:</strong></Typography>
              <Box display={"inline-block"} position={"relative"} ml={1}>
                <MateriaSlots singleMateria={materiaState.singleMateria} connectedMateria={materiaState.connectedMateria}></MateriaSlots>
              </Box>
            </Box>

            <BasicStatsTable stats={stats}></BasicStatsTable>
          </Box>
        </Paper>
      </ListItem >
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

export default Character
