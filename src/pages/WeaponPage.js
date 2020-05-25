import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import Weapon from '../components/Weapon'
import { selectCharacter } from '../store/selectors/characterSelector'
import { selectUserDataByCharacter, selectWeaponUserData } from '../store/selectors/userDataSelector'
import { setSelectedEffects, storeUserData } from '../store/actions/userDataActions'
import { useTranslation } from 'react-i18next'
import { Box } from '@material-ui/core'

const WeaponPage = () => {
  const { t } = useTranslation();

  let { id, wpId } = useParams()

  const dispatch = useDispatch()

  const character = useSelector(state => selectCharacter(state, id))
  const weapon = (character.weapons[wpId]) || {}
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
    <Box ml={2}>
      <Link to={`/character/${id}`}>{t("common.back-to-weapon")}</Link>
      {renderCharacter()}
    </Box>
  )
}

export default WeaponPage
