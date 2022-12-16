import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <div className="ui button red">Delete</div>
      <Link to={'/'} className="ui cancel button">
        Cancel
      </Link>
    </React.Fragment>
  )

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete a Stream"
        content="You are sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  )
}

export default StreamDelete
