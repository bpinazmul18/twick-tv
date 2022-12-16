import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../store/streams'
import { useParams } from 'react-router-dom'

const StreamShow = (props) => {
  const { streamId } = useParams()

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  if (!props.stream) return <div>Loading...</div>
  return (
    <div>
      <h1>{props.stream.title}</h1>
      <h3>{props.stream.description}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { stream: state.entities.streams.stream }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
