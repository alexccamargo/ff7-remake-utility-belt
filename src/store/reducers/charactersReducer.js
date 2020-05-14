import * as actions from '../actions/charactersActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  characters: [],
}

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTER_LIST:
      return { ...state, loading: true }
    case actions.GET_CHARACTER_LIST_SUCCESS:
      return { characters: action.payload, loading: false, hasErrors: false }
    case actions.GET_CHARACTER_LIST_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
