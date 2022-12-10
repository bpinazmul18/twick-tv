import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

export default function configureStore() {
  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  )
}
