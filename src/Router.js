import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StreamList from './pages/StreamList'
import StreamEdit from './pages/StreamEdit'
import StreamCreate from './pages/StreamCreate'
import StreamDelete from './pages/StreamDelete'
import StreamShow from './pages/StreamShow'

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<StreamList />} />
      <Route path="/streams/new" exact element={<StreamCreate />} />
      <Route path="/streams/edit/:streamId" exact element={<StreamEdit />} />
      <Route
        path="/streams/delete/:streamId"
        exact
        element={<StreamDelete />}
      />
      <Route path="/streams/show" exact element={<StreamShow />} />
    </Routes>
  )
}

export default Router
