import * as actions from '../actions/userDataActions'

export const initialState = {
  characters: {},
  weapons: {},
}

export const characterInitialState = {
  spAmount: 100,
}

export const weaponInitialState = {
  effects: []
}

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_DATA:
    case actions.SAVE_USER_DATA:
      return { ...state }
    case actions.LOAD_USER_DATA:
      return { ...initialState, ...action.payload }
    case actions.SET_SP_AMOUNT:
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.charCode]: {
            ...(state.characters[action.payload.charCode] || characterInitialState),
            spAmount: action.payload.spAmount
          }
        }
      }
    case actions.SET_WEAPON_EFFECTS:
      const weaponId = `${action.payload.charCode}${action.payload.weaponCode}`
      return {
        ...state,
        weapons: {
          ...state.weapons,
          [weaponId]: {
            ...(state.weapons[weaponId] || weaponInitialState),
            effects: action.payload.effects
          }
        }
      }
    default:
      return state
  }
}
