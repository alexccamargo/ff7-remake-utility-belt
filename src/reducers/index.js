import { combineReducers } from 'redux'

import charactersReducer from './charactersReducer'

const rootReducer = combineReducers({
  characters: charactersReducer,
  // more reducers will be added here
})

export default rootReducer
