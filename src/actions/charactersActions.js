export const GET_CHARACTERS = 'GET CHARACTERS'
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE'

export const getCharacters = () => ({ type: GET_CHARACTERS })
export const getCharactersSuccess = CHARACTERS => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: CHARACTERS,
})

export const getCharactersFailure = () => ({ type: GET_CHARACTERS_FAILURE })

const data = [
  {key: "a", name: "Aerith" },
  {key: "b", name: "Baret"}, 
  {key: "c", name: "Cloud"}, 
  {key: "t", name: "Tifa"}];

export function fetchCharacters() {
  return async dispatch => {
    dispatch(getCharacters())

    try {
      dispatch(getCharactersSuccess(data))
    } catch (error) {
      dispatch(getCharactersFailure())
    }
  }
}
