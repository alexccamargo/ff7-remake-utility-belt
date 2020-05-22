import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

import Character from '../components/Character'
import { setSPAmount, storeUserData } from '../store/actions/userDataActions'
import { selectUserDataByCharacter, selectWeaponUserDataByCharacter } from '../store/selectors/userDataSelector'
import { selectCharacter } from '../store/selectors/characterSelector'
import { Typography, Box, TextField } from '@material-ui/core'

const CharacterPage = ({ t }) => {
  let { id } = useParams()
  const character = useSelector(state => selectCharacter(state, id))
  const characterUserData = useSelector(state => selectUserDataByCharacter(state, id))
  const weaponsUserData = useSelector(state => selectWeaponUserDataByCharacter(state, id))

  const dispatch = useDispatch()

  const [totalSP, setTotalSP] = useState(characterUserData.spAmount)

  const handleSpChange = (e) => {
    setTotalSP(e.target.value)
    dispatch(setSPAmount(character.id, e.target.value))
  }

  const saveData = () => { dispatch(storeUserData()) }
  useEffect(saveData, [characterUserData])

  const renderCharacter = () => {

    if (!character) return <p>Unable to find character</p>

    return <Character character={character} totalSP={totalSP} weaponsUserData={weaponsUserData}></Character>

  }

  return (
    <Box>
      <Box ml={2}>
        <Link to={"/"}>Back to character selection</Link>
        <Typography variant="h2" mb={1}>
          {t(`character.${character.id}`)}
        </Typography>
        <TextField label="Total SP:" value={totalSP} onChange={handleSpChange} />
      </Box>

      {renderCharacter()}
    </Box>
  )
}

export default translate()(CharacterPage)
