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
import { PUNISHER_MODE_ATTACK_PERCENT_BOOST, LIMIT_BREAK_DAMAGE_PERCENT_BOOST } from '../store/data/effect'

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}))

const specialModifiers = [
  'attackPercentBoost',
  'magicDamageReductionPercentGuard',
  'mpRegenPercentBoost',
  'elementalDefensePercent',
  'healingSpellMPCostPercentReduction',
  'physicalDamageReductionPercentGuard',
  'tempestPercentBoost',
  PUNISHER_MODE_ATTACK_PERCENT_BOOST,
  LIMIT_BREAK_DAMAGE_PERCENT_BOOST,
]

const spEffect = [
  'reprieve',
]

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

  const renderSpecialModifiers = (stats) => {
    const items = specialModifiers
      .filter(smod => stats[smod])
      .map(smod => (<li key={`sf${smod}`}>{smod}: {stats[smod]}</li>))

    if (!items.length)
      return <div></div>

    return <div>
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
      .map(sEffect => (<li key={`sf${sEffect}`}>{sEffect}: {stats[sEffect]}</li>))

    if (!items.length) {
      return (
        <div></div>
      )
    }

    return <div>
      <h3>Other effects</h3>
      <ul>
        {items}
      </ul>
    </div>





  }

  const renderWeaponStats = (selectedEffect) => {
    const stats = calculateStats(selectedEffect)
    return (
      <div>
        <h3>Basic Stats</h3>
        <table className="weapon-stats">
          <thead>
            <tr>
              <th>AP</th>
              <th>MP</th>
              <th>Def</th>
              <th>MDef</th>
              <th>Max HP</th>
              <th>Max MP</th>
              <th>Materia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.attackPower}</td>
              <td>{stats.magicAttackPower}</td>
              <td>{stats.defense}</td>
              <td>{stats.magicDefense}</td>
              <td>{stats.maxHp || '-'}</td>
              <td>{stats.maxMp || '-'}</td>
              <td>{stats.numMateria || '-'}</td>
            </tr>
          </tbody>
        </table>

        {renderSpecialModifiers(stats)}
        {renderSpecialEffects(stats)}
      </div>
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
