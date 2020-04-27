import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions/charactersActions'

import { Characters } from '../components/Characters'

const CharactersPage = ({
  dispatch,
  characters,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const renderCharacters = () => {
    if (loading.post) return <p>Loading characters...</p>
    if (hasErrors.post) return <p>Unable to display characters.</p>

    return <Characters characters={characters}></Characters>
  }

  return (
    <section>
      { renderCharacters() }
    </section>
  )
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: { characters: state.characters.loading },
  hasErrors: { characters: state.characters.hasErrors },
})

export default connect(mapStateToProps)(CharactersPage)
