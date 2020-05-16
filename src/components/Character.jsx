import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { translate } from 'react-i18next'
import TextField from '@material-ui/core/TextField'

const Character = ({ t, character, spAmount, onSPChange }) => {
  const weapons = character.weapons || []
  const [totalSP, setTotalSP] = useState(spAmount)

  const handleTotalSPChange = (e) => {
    setTotalSP(e.target.value)
    onSPChange(e.target.value)
  }

  const renderWeaponLinks = () => {
    return (
      <ul>
        {
          weapons.map(w => (
            <li key={w.id}>
              <Link to={`/character/${character.id}/weapon/${w.id}`}>
                {t(`weapon.${character.id}.${w.id}.name`)}
              </Link>
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      <h1>{t(`character.${character.id}`)}</h1>
      <TextField id="standard-basic" label="Total SP:" value={totalSP} onChange={handleTotalSPChange} />
      <ul>
        {renderWeaponLinks()}
      </ul>
    </div>
  )
}

export default translate()(Character)
