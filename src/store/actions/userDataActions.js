
export const GET_USER_DATA = 'GET GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_USER_DATA_SUCCESS = 'SAVE_USER_DATA_SUCCESS';
export const SAVE_USER_DATA_FAILURE = 'SAVE_USER_DATA_FAILURE';

export const SET_SP_AMOUNT = 'SET_SP_AMOUNT';
export const SET_WEAPON_EFFECTS = "SET_WEAPON_EFFECTS";

export const getUserData = () => ({ type: GET_USER_DATA });
export const getUserDataSuccess = USERDATA => ({
  type: GET_USER_DATA_SUCCESS,
  payload: USERDATA,
});
export const getUserDataFailure = () => ({ type: GET_USER_DATA_FAILURE });

export const saveUserData = () => ({ type: SAVE_USER_DATA })
export const saveUserDataSuccess = USERDATA => ({
  type: SAVE_USER_DATA_SUCCESS,
  payload: USERDATA,
})
export const saveUserDataFailure = () => ({ type: SAVE_USER_DATA_FAILURE })

const USER_DATA_KEY = "UD";

export function fetchUserData() {
  return async dispatch => {
    dispatch(getUserData());

    try {
      const data = localStorage.getItem(USER_DATA_KEY);
      dispatch(getUserDataSuccess(data ? JSON.parse(data) : {}));
    } catch (error) {
      dispatch(getUserDataFailure());
    }
  }
}

export function storeUserData(data) {
  return async dispatch => {
    dispatch(saveUserData());

    try {
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
      dispatch(saveUserDataSuccess(data));
    } catch (error) {
      dispatch(getUserDataFailure());
    }
  }
}

export const setSPAmount = (charCode, spAmount) => ({
  type: SET_SP_AMOUNT,
  payload: { charCode, spAmount },
});

export const setSelectedEffects = (charCode, weaponCode, effectIds) => ({
  type: SET_WEAPON_EFFECTS,
  payload: { charCode, weaponCode, effectIds },
});
