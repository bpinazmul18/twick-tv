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

  const renderedContent = () => {
    if (!props.stream) return 'Are you sure you want to delete this stream?'
    return `Are you sure you want to delete the stream with title: ${props.stream.title}`
  }

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  return (
    <Modal
      title="Delete a Stream"
      content={renderedContent()}
      actions={actions}
      onDismiss={() => navigate('/')}
    />
  )
}

const mapStateToProps = (state) => {
  return { stream: state.entities.streams.stream }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete)
