import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import Weapon from '../components/Weapon'
import { selectCharacter } from '../store/selectors/characterSelector'
import { selectUserDataByCharacter, selectWeaponUserData } from '../store/selectors/userDataSelector'
import { setSelectedEffects, storeUserData } from '../store/actions/userDataActions'

const WeaponPage = () => {

  let { id, wpId } = useParams()

  const dispatch = useDispatch()

  const character = useSelector(state => selectCharacter(state, id))
  const weapon = (character.weapons || []).find(w => w.id === wpId) || {}
  const characterUserData = useSelector(state => selectUserDataByCharacter(state, id))
  const weaponUserData = useSelector(state => selectWeaponUserData(state, id, wpId))

  const handleWeaponEffectChange = (effects) => {
    dispatch(setSelectedEffects(character.id, weapon.id, effects))
  }

  const saveData = () => { dispatch(storeUserData()) }
  useEffect(saveData, [characterUserData])

  const renderCharacter = () => {
    if (!character) return <p>Unable to find character</p>

    return <Weapon
      character={character}
      weapon={weapon}
      spAmount={characterUserData.spAmount}
      selectedEffects={weaponUserData.effects}
      onSelectedEffectsChange={handleWeaponEffectChange}></Weapon>
  }

  return (
    <div>
      <Link to={`/character/${id}`}>Back to weapon selection</Link>
      {renderCharacter()}
    </div>
  )
}

export default WeaponPage
