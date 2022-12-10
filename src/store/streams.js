import { addStream } from '../services/streams'

// ActionTypes
const STREAM_ADDED = 'STREAM_ADDED'

// Actions
export const createStream = (data) => async (dispatch) => {
  try {
    const response = await addStream(data)
    dispatch({
      type: STREAM_ADDED,
      payload: { stream: response.data },
    })
  } catch (ex) {}
}

// Initial state
const initalState = {
  loading: false,
  list: [],
  lastFetch: null,
}

// Reducer
const streamsReducer = (streams = initalState, action) => {
  if (action.type === STREAM_ADDED) {
    return { ...streams, list: [...streams.list, action.payload.stream] }
  }
  return streams
}

export default streamsReducer
