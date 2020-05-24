import React from 'react'
import { connect } from 'react-redux'

import CharacterList from '../components/CharacterList'

const CharacterListPage = ({
  characters,
  hasErrors,
  loading,
}) => {

  const renderCharacters = () => {
    if (loading.characters) return <p>Loading characters...</p>
    if (hasErrors.characters) return <p>Unable to display characters.</p>

    return <CharacterList characters={characters}></CharacterList>
  }

  return (
    <section>
      {renderCharacters()}
    </section>
  )
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: { characters: state.characters.loading },
  hasErrors: { characters: state.characters.hasErrors },
})

export default connect(mapStateToProps)(CharacterListPage)
