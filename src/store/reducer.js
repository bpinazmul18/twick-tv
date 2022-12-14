import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import entitiesReducer from './entities'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  entities: entitiesReducer,
})
