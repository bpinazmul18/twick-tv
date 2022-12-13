import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import App from './App'
import configureStore from './store/configureStore'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))

const history = createBrowserHistory()

root.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
