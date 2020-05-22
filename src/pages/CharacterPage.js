import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

import Character from '../components/Character'
import { setSPAmount, storeUserData } from '../store/actions/userDataActions'
import { selectUserDataByCharacter, selectWeaponUserDataByCharacter } from '../store/selectors/userDataSelector'
import { selectCharacter } from '../store/selectors/characterSelector'
import { Typography } from '@material-ui/core'

const CharacterPage = ({ t }) => {
  let { id } = useParams()
  const character = useSelector(state => selectCharacter(state, id))
  const characterUserData = useSelector(state => selectUserDataByCharacter(state, id))
  const weaponsUserData = useSelector(state => selectWeaponUserDataByCharacter(state, id))

  const dispatch = useDispatch()

  const handleSpChange = (spAmount) => {
    dispatch(setSPAmount(character.id, spAmount))
  }

  const saveData = () => { dispatch(storeUserData()) }
  useEffect(saveData, [characterUserData])

  const renderCharacter = () => {

    if (!character) return <p>Unable to find character</p>

    return <Character character={character} weaponsUserData={weaponsUserData} spAmount={characterUserData.spAmount} onSPChange={handleSpChange}></Character>

  }

  return (
    <div>
      <Link to={"/"}>Back to character selection</Link>
      <Typography variant="h2" mb={1}>
      {t(`character.${character.id}`)}
      </Typography>

      {renderCharacter()}
    </div>
  )
}

export default translate()(CharacterPage)
