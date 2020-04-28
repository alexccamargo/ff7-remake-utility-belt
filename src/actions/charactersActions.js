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
  {key: "a", name: "Aerith", image: "/img/aerith.png"},
  {key: "b", name: "Baret", image: "/img/barret.jpeg"}, 
  {key: "c", name: "Cloud", image: "/img/cloud.png"}, 
  {key: "t", name: "Tifa", image: "/img/tifa.jpg"}];

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
