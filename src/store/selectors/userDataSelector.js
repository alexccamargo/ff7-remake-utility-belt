import { createSelector } from 'reselect'
import { characterInitialState, weaponInitialState } from '../reducers/userDataReducer'

export const selectUserDataByCharacter = createSelector(
  state => state.userData.characters,
  (_, characterId) => characterId,
  (characters, characterId) => (characters && characters[characterId]) || { ...characterInitialState }
)

export const selectWeaponUserData = createSelector(
  state => state.userData.weapons,
  (_, characterId, weaponId) => ({ characterId, weaponId }),
  (weapons, { characterId, weaponId }) => {
    return (weapons && weapons[`${characterId}${weaponId}`]) || { ...weaponInitialState }
  }
)

