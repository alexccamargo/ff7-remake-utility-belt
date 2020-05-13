import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions/charactersActions'
import { useParams } from 'react-router';
import Character from '../components/Character';
import { translate } from 'react-i18next';

const CharacterPage = ({
  dispatch,
  characters,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  let { id } = useParams();

  const renderCharacter = () => {
    if (loading.characters) return <p>Loading character...</p>
    if (hasErrors.characters) return <p>Unable to display character.</p>

    const character = characters.find(c => id === c.id)
    if (!character) return <p>Unable to find character</p>

    return <Character character={character}>{character.name}</Character>

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

export default connect(mapStateToProps)(translate()(CharacterPage))
