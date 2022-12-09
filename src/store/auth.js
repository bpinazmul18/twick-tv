// ActionTypes
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

// Actions
export const signIn = () => ({
  type: SIGN_IN,
})

export const signOut = () => ({
  type: SIGN_OUT,
})

// Initial state
const initalState = {
  auth: null,
}

// Reducer
const authReducer = (auth = initalState, action) => {
  return auth
}

export default authReducer
