import React from 'react'
import Router from './Router'
import Header from './components/Header'

const App = () => {
  return (
    <div className="app-main ui container">
      <Header />
      <Router />
    </div>
  )
}

export default App
