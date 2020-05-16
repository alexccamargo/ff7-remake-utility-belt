
export const GET_USER_DATA = 'GET_USER_DATA'
export const LOAD_USER_DATA = 'LOAD_USER_DATA'
export const SAVE_USER_DATA = 'SAVE_USER_DATA'

export const SET_SP_AMOUNT = 'SET_SP_AMOUNT'
export const SET_WEAPON_EFFECTS = "SET_WEAPON_EFFECTS"

export const getUserData = () => ({
  type: GET_USER_DATA,
})

const loadUserData = (USERDATA) => ({
  type: LOAD_USER_DATA,
  payload: USERDATA,
})

const USER_DATA_KEY = "UD"

export function fetchUserData() {
  return async dispatch => {
    const data = localStorage.getItem(USER_DATA_KEY)
    dispatch(loadUserData(data ? JSON.parse(data) : {}))
  }
}

export const storeUserData = () => {
  return (_, getState) => {
    const data = JSON.stringify(getState().userData)
    localStorage.setItem(USER_DATA_KEY, data)
    return saveUserData()
  }
}

const saveUserData = () => ({
  type: SAVE_USER_DATA,
})

export const setSPAmount = (charCode, spAmount) => ({
  type: SET_SP_AMOUNT,
  payload: { charCode, spAmount },
})

export const setSelectedEffects = (charCode, weaponCode, effects) => ({
  type: SET_WEAPON_EFFECTS,
  payload: { charCode, weaponCode, effects },
})
