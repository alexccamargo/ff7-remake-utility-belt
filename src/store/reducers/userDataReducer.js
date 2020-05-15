import * as actions from '../actions/userDataActions'

export const initialState = {
  characters: {},
}

export const characterInitialState = {
  spAmount: 100,
  weapons: []
}

export const weaponInitialState = {
  effects: []
}

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_DATA:
    case actions.SAVE_USER_DATA:
      return { ...state }
    case actions.SET_SP_AMOUNT:
      return {
        characters: {
          ...state.characters,
          ...createNewCharacterOrUpdateAmount(state, action.payload)
        }
      }
    case actions.SET_WEAPON_EFFECTS:
      return {
        characters: {
          ...state.characters,
          ...createNewCharacterOrWeaponEffects(state, action.payload)
        }
      }
    default:
      return state
  }
}

const createNewCharacterOrUpdateAmount = (state, { charCode, spAmount }) => {
  const character = {}
  character[charCode] = { ...characterInitialState, ...(state.characters[charCode] || {}), spAmount }

  return character
}

const createNewCharacterOrWeaponEffects = (state, { charCode, weaponCode, effectIds }) => {
  const character = {
    [charCode]: {
      ...characterInitialState,
      ...(state.characters[charCode] || {}),
    }
  }
  
  const weapons = character[charCode].weapons

  character[charCode].weapons = {
    ...weapons,
    [weaponCode]: { ...weaponInitialState, ...(weapons[weaponCode] || {}), effectIds }
  }

  return character
}