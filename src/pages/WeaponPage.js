import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions/charactersActions'
import { useParams } from 'react-router';
import { Weapon } from '../components/Weapon';

const CharacterPage = ({
  dispatch,
  characters,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  let { id, wpId } = useParams();

  const renderCharacter = () => {
    if (loading.characters) return <p>Loading character...</p>
    if (hasErrors.characters) return <p>Unable to display character.</p>

    const character = characters.find(c => id === c.id)
    if (!character) return <p>Unable to find character</p>

    return <Weapon character={character} selectedWeapon={wpId}>{character.name}</Weapon>

  }

  return (
    <div>
      {renderCharacter()}
    </div>
  )
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: { characters: state.characters.loading },
  hasErrors: { characters: state.characters.hasErrors },
})

export default connect(mapStateToProps)(CharacterPage)
