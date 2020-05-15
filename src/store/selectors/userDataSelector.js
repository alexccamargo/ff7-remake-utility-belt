import { createSelector } from 'reselect'
import { characterInitialState } from '../reducers/userDataReducer'

export const selectUserDataByCharacter = createSelector(
  state => state.userData.characters,
  (_, characterId) => characterId,
  (characters, characterId) => (characters && characters[characterId]) || { ...characterInitialState }
)