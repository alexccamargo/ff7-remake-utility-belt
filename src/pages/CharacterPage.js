import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

import Character from '../components/Character'
import { setSPAmount, storeUserData } from '../store/actions/userDataActions'
import { selectUserDataByCharacter } from '../store/selectors/userDataSelector'
import { selectCharacter } from '../store/selectors/characterSelector'

const CharacterPage = () => {
  let { id } = useParams()
  const character = useSelector(state => selectCharacter(state, id))
  const characterUserData = useSelector(state => selectUserDataByCharacter(state, id))
  const dispatch = useDispatch()

  const handleSpChange = (spAmount) => {
    dispatch(setSPAmount(character.id, spAmount))
  }

  const saveData = () => { dispatch(storeUserData()) }
  useEffect(saveData, [characterUserData])

  const renderCharacter = () => {

    if (!character) return <p>Unable to find character</p>

    return <Character character={character} spAmount={characterUserData.spAmount} onSPChange={handleSpChange}></Character>

  }

  return (
    <div>
      <Link to={"/"}>Back to character selection</Link>
      {renderCharacter()}
    </div>
  )
}

export default translate()(CharacterPage)
