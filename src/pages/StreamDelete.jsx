import React from 'react'
import Modal from '../components/Modal'

const StreamDelete = () => {
  return (
    <div>
      Stream Delete
      <Modal
        title="Delete a Stream"
        content="You are sure you want to delete this stream?"
      />
    </div>
  )
}

export default StreamDelete
