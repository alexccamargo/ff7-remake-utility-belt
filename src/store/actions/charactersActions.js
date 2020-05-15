import { getDataFromJson } from "../data/data"

export const GET_CHARACTER_LIST = 'GET CHARACTERS'
export const GET_CHARACTER_LIST_SUCCESS = 'GET_CHARACTER_LIST_SUCCESS'
export const GET_CHARACTER_LIST_FAILURE = 'GET_CHARACTER_LIST_FAILURE'

export const getCharacterList = () => ({ type: GET_CHARACTER_LIST })
export const getCharacterListSuccess = CHARACTERS => ({
  type: GET_CHARACTER_LIST_SUCCESS,
  payload: CHARACTERS,
})

export const getCharacterListFailure = () => ({ type: GET_CHARACTER_LIST_FAILURE })

export function fetchCharacters() {
  return async dispatch => {
    dispatch(getCharacterList())

    try {
      dispatch(getCharacterListSuccess(getDataFromJson()))
    } catch (error) {
      dispatch(getCharacterListFailure())
    }
  }
}
