import React, { useState, useEffect } from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Switch from '@material-ui/core/Switch'

import { makeStyles } from '@material-ui/core/styles'

import './Weapon.css'
import { translate } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}))


const Weapon = ({ t, character, weapon, spAmount, selectedEffects, onSelectedEffectsChange }) => {
  const classes = useStyles()

  const effects = new Map((weapon.cores || []).flatMap(c => c.effects).map(e => [e.id, e]))

  const [selectedEffectState, setSelectedEffectState] = useState([...selectedEffects])
  const [amountState, setAmountState] = useState(spAmount)

  const updateAmount = () => {
    const totalValue = selectedEffectState.map(ne => effects.get(ne).cost).reduce((a, b) => a + b, 0)
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

  const calculateStats = (selectedEffect) => {
    let stats = {
      attackPower: weapon.attackPower,
      magicAttackPower: weapon.magicAttackPower,
      defense: weapon.defense,
      magicDefense: weapon.magicDefense
    }

    selectedEffect.forEach((effect) => {
      stats = effects.get(effect).applyEffect(stats)
    })

    return stats
  }

  const renderWeaponStats = (selectedEffect) => {
    const stats = calculateStats(selectedEffect)
    return (
      <table className="weapon-stats">
        <thead>
          <tr>
            <th>AP</th>
            <th>MP</th>
            <th>Def</th>
            <th>MDef</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stats.attackPower}</td>
            <td>{stats.magicAttackPower}</td>
            <td>{stats.defense}</td>
            <td>{stats.magicDefense}</td>
          </tr>
        </tbody>
      </table>
    )

  }

  return (
    <div>
      <h1>{t(`character.${character.id}`)}</h1>
      <h2>{t(`weapon.${character.id}.${weapon.id}.name`)}</h2>
      <h3>SP: {amountState}/{spAmount}</h3>
      {renderWeaponStats(selectedEffectState)}
      {renderCores()}
    </div>
  )
}

export default translate()(Weapon)
