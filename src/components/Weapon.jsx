import React, { useState, useEffect } from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { Switch, IconButton, Popover, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { useTranslation } from 'react-i18next'

import './Weapon.css'
import * as effectTypes from '../store/data/effect'

import MateriaSlots from './MateriaSlots'
import BasicStatsTable from './Weapon/BasicStatsTable'
import { getStats, getTotalSP, getConnectedAndSingleMateriaCounts } from '../shared/StatsCalculator'

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  typography: {
    padding: theme.spacing(2),
  },
}))

const containDetails = [
  effectTypes.REPRIEVE,
  effectTypes.STAGGER_SIPHON,
  effectTypes.TRADE_OFF,
  effectTypes.BLOODSUCKER,
]

const specialModifiers = [
  effectTypes.SPEED,
  effectTypes.ATTACK_POWER_HIGH_HP,
  effectTypes.MAGIC_ATTACK_POWER_HIGH_HP,
  effectTypes.MP_REGEN_PERCENT_BOOST,
  effectTypes.PUNISHER_MODE_ATTACK_PERCENT_BOOST,
  effectTypes.LIMIT_BREAK_DAMAGE_PERCENT_BOOST,
  effectTypes.LIMIT_BREAK_PERCENT_BOOST_LOW_HP,
  effectTypes.PUNISHER_MODE_COUNTER_DAMAGE_PERCENT_BOOST,
  effectTypes.UNBRIDLED_STRENGTH_DAMAGE_PERCENT_BOOST,
  effectTypes.OVERCHARGE_DAMAGE_PERCENT_BOOST,
  effectTypes.CRIPPLING_DAMAGE_PERCENT_BOOST,
  effectTypes.WEAPON_ABILITY_CRITICAL_HIT_RATE_PERCENT_BOOST,
  effectTypes.PHYSICAL_DEFENSE_HIGH_HP,
  effectTypes.PHYSICAL_DEFENSE_LOW_HP,
  effectTypes.MAGIC_DEFENSE_LOW_HP,
  effectTypes.SELF_HEALING_PERCENT_BOOST_LOW_HP,
  effectTypes.CONCENTRATION_ACTIVATION,
  effectTypes.AERIAL_ATTACK_DAMAGE_PERCENT_BOOST,
  effectTypes.BUFF_DURRATION_PERCENT_BOOST,
  effectTypes.ELEMENTAL_DEFENSE_PERCENT_BOOOST,
  effectTypes.HEALING_SPELLS_MP_COST_REDUCTION,
  effectTypes.ATTACK_DAMAGE_PERCENT_BOOST,
  effectTypes.TEMPEST_DAMAGE_PERCENT_BOOST,
  effectTypes.PHYSICAL_DAMAGE_REDUCTION_PERCENT_ON_GUARD,
  effectTypes.MAGIC_DAMAGE_REDUCTION_PERCENT_ON_GUARD,
]

const spEffect = [
  effectTypes.TRADE_OFF,
  effectTypes.REPRIEVE,
  effectTypes.STAGGER_SIPHON,
  effectTypes.BLOODSUCKER,
]

const Weapon = ({ character, weapon, spAmount, selectedEffects, onSelectedEffectsChange }) => {
  const { t } = useTranslation();
  const classes = useStyles()

  const [selectedEffectState, setSelectedEffectState] = useState([...selectedEffects])
  const [amountState, setAmountState] = useState(spAmount)

  const updateAmount = () => {
    const totalValue = getTotalSP(weapon, selectedEffectState)
    setAmountState(spAmount - totalValue)
  }
  useEffect(updateAmount, [selectedEffectState])

  const handleToggle = (event) => {
    let newEffectList = [...selectedEffectState]
    if (!event.target.checked) {
      newEffectList = newEffectList.filter(se => se !== event.target.name)
    } else {
      newEffectList.push(event.target.name)
    }

    setSelectedEffectState(newEffectList)
    onSelectedEffectsChange(newEffectList)
  }

  const renderEffects = (core) => {
    if (!core.effects)
      return <p>No effects found.</p>

    return (
      <List className={classes.listRoot}>
        {
          core.effects.map(effect => {

            return (
              <ListItem key={effect.id}>
                <ListItemText id={`lable-${effect.id}`} primary={t(`effects.${effect.type}`, { value: effect.value })} />
                {containDetails.includes(effect.type) &&
                  <ListItemIcon>
                    <IconButton onClick={handleClick}>
                      <HelpOutlineIcon />
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                    >
                      <Typography className={classes.typography}>{t(`effects.details.${effect.type}`)}</Typography>
                    </Popover>
                  </ListItemIcon>
                }

                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={handleToggle}
                    name={effect.id}
                    checked={selectedEffectState.includes(effect.id)}
                    inputProps={{ 'aria-labelledby': `lable-${effect.id}` }}
                    disabled={!selectedEffectState.includes(effect.id) && effect.cost > amountState}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    )
  }

  const renderCores = () => {
    if (!weapon.cores)
      return <p>No cores</p>

    return (
      weapon.cores.map(core => (
        <ExpansionPanel key={core.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={core.id}
            id={core.id}
          >
            {t(`weapon.${character.id}.${weapon.id}.core.${core.id}`)}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {renderEffects(core)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))
    )
  }

  const renderSpecialModifiers = (stats) => {
    const items = specialModifiers
      .filter(smod => stats[smod])
      .map(smod => (<li key={`sf${smod}`}>{t(`effects.${smod}`, { value: stats[smod] })}</li>))

    return !!items.length && <div>
      <h3> Special modifiers</h3>
      <ul>
        {
          items
        }
      </ul>
    </div>
  }

  const renderSpecialEffects = (stats) => {

    const items = spEffect
      .filter(sEffect => stats[sEffect])
      .map(sEffect => (<li key={`sf${sEffect}`}>{t(`effects.${sEffect}`, { value: stats[sEffect] })}</li>))

    return !!items.length && <div>
      <h3>Other effects</h3>
      <ul>
        {items}
      </ul>
    </div>
  }

  const renderWeaponStats = (selectedEffect) => {
    const stats = getStats(weapon, selectedEffect)
    const materiaState = getConnectedAndSingleMateriaCounts(weapon, stats)
    return (
      <div>
        <h3>{t("common.materia-slots")}</h3>
        <MateriaSlots singleMateria={materiaState.singleMateria} connectedMateria={materiaState.connectedMateria}></MateriaSlots>
        <h3>{t("common.attr")}</h3>
        <BasicStatsTable stats={stats}></BasicStatsTable>
        {renderSpecialModifiers(stats)}
        {renderSpecialEffects(stats)}
      </div>
    )
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <h1>{t(`character.${character.id}`)}</h1>
      <h2>{t(`weapon.${character.id}.${weapon.id}.name`)}</h2>
      <h3>{t("common.SP")}: {amountState}/{spAmount}</h3>
      {renderWeaponStats(selectedEffectState)}
      {renderCores()}
    </div>
  )
}

export default Weapon
