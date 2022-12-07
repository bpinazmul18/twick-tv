import React from 'react'
import { Routes, Route } from 'react-router-dom'

const PageOne = () => {
  return <div>Pageone</div>
}

const PageTwo = () => {
  return <div>Pagetwo</div>
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/pagetwo" element={<PageTwo />} />
    </Routes>
  )
}

export default Router
