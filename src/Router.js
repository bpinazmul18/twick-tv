import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      Pageone
      <Link to="/pagetwo">Page two</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Pagetwo
      <Link to="/">Page one</Link>
    </div>
  )
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
