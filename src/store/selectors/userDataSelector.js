import { createSelector } from 'reselect'

export const selectUserDataByCharacter = createSelector(
  state => state.userData.characters,
  (_, characterId) => characterId,
  (characters, characterId) => (characters && characters[characterId]) || {spAmount: 100}
)