import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStreams } from '../store/streams'

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams()
  }, [])

  const renderedList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      )
    })
  }
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderedList()}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.entities.streams.list) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
