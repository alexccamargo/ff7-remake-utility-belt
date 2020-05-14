import { combineReducers } from 'redux'

import charactersReducer from './charactersReducer'
import userDataReducer from './userDataReducer'

const rootReducer = combineReducers({
  characters: charactersReducer,
  userData: userDataReducer,
})

export default rootReducer
