// ActionTypes
import { addStream } from '../services/streams'

// Actions
export const createStream = (data) => async (dispatch) => {
  const response = await addStream(data)
  console.log(response)
}

// Initial state
const initalState = {
  loading: false,
  list: [],
  lastFetch: null,
}

// Reducer
const streamsReducer = (streams = initalState, action) => {
  return streams
}

export default streamsReducer
