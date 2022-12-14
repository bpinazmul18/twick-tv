import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../store/streams'

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams()
  }, [])

  const renderedAdmin = (stream) => {
    if (stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/delete/${stream.id}`} className="ui red button">
            Delete
          </Link>
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
        </div>
      )
    }
  }

  const renderedList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderedAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>

            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  const renderedCreate = () => {
    if (props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to={'/streams/new'} className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderedList()}</div>
      {renderedCreate()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.entities.streams.list),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
