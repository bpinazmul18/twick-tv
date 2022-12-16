import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Modal from '../components/Modal'
import { connect } from 'react-redux'
import { fetchStream } from '../store/streams'

const StreamDelete = (props) => {
  const navigate = useNavigate()
  const { streamId } = useParams()

  const actions = (
    <React.Fragment>
      <div className="ui button red">Delete</div>
      <Link to={'/'} className="ui cancel button">
        Cancel
      </Link>
    </React.Fragment>
  )

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete a Stream"
        content="You are sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => navigate('/')}
      />
    </div>
  )
}

export default connect(null, { fetchStream })(StreamDelete)
