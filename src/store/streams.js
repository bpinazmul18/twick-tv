import _ from 'lodash'

import {
  addStream,
  getAllStreams,
  getAllStream,
  updateStream,
  removeStream,
} from '../services/streams'

// ActionTypes
const STREAM_ADDED = 'STREAM_ADDED'
const FETCH_STREAMS = 'FETCH_STREAMS'
const FETCH_STREAM = 'FETCH_STREAM'
const UPDATE_STREAM = 'UPDATE_STREAM'
const DELETE_STREAM = 'DELETE_STREAM'

// Actions
export const createStream = (data) => async (dispatch, getState) => {
  const { userId } = getState().auth

  try {
    const response = await addStream({ ...data, userId })
    dispatch({
      type: STREAM_ADDED,
      payload: { stream: response.data },
    })

    // Do some programmatic navigation to
    // get the user back to the root route
  } catch (ex) {}
}

export const fetchStreams = () => async (dispatch) => {
  try {
    const response = await getAllStreams()
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data,
    })
  } catch (ex) {}
}

export const fetchStream = (id) => async (dispatch) => {
  try {
    const response = await getAllStream(id)
    dispatch({
      type: FETCH_STREAM,
      payload: { stream: response.data },
    })
  } catch (ex) {}
}

export const editStream = (id, formValues) => async (dispatch) => {
  try {
    const response = await updateStream(id, formValues)
    dispatch({
      type: UPDATE_STREAM,
      payload: { stream: response.data },
    })
  } catch (ex) {}
}

export const delteStream = (id) => async (dispatch) => {
  try {
    await removeStream(id)
    dispatch({
      type: DELETE_STREAM,
      payload: id,
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
  if (action.type === FETCH_STREAMS) {
    return { ...streams, list: { ..._.mapKeys(action.payload, 'id') } }
  }

  if (action.type === STREAM_ADDED) {
    return { ...streams, list: [...streams.list, action.payload.stream] }
  }

  if (action.type === FETCH_STREAM) {
    return { ...streams, [action.payload.id]: action.payload.stream }
  }

  if (action.type === UPDATE_STREAM) {
    return { ...streams, [action.payload.id]: action.payload.stream }
  }

  if (action.type === DELETE_STREAM) {
    const removeStream = _.omit(streams[action.payload], action.payload)
    return { ...streams, removeStream }
  }
  return streams
}

export default streamsReducer
