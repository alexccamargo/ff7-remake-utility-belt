import { createSelector } from 'reselect'

export const selectCharacter = createSelector(
  state => state.characters.characters,
  (_, characterId) => characterId,
  (characters, characterId) => (characters && characters.find(c => c.id === characterId)) || {}
)
