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
  isSignedIn: null,
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

// Reducer
const authReducer = (auth = initalState, action) => {
  if (action.type === SIGN_IN) {
    return { ...auth, isSignedIn: true }
  }

  if (action.type === SIGN_OUT) {
    return { ...auth, isSignedIn: false }
  }
  return auth
}

export default authReducer
