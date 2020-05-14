import * as actions from '../actions/userDataActions'

export const initialState = {
  characters: {},
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
          [action.payload.charCode]: { ...state.characters[action.payload.charCode],
            spAmount: action.payload.spAmount
          }
        }
      }
    default:
      return state
  }
}
