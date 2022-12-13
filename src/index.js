import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'
import history from './history'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter router={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
