import { combineReducers } from 'redux'
import streamsReducer from './streams'

export default combineReducers({
  streams: streamsReducer,
})
