import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchStream } from '../store/streams'
const StreamEdit = (props) => {
  const { streamId } = useParams()

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  console.log(props)
  if (!props.stream) return <div>Loading...</div>
  return <div>{props.stream.title}</div>
}

const mapStateToProps = (state) => {
  return { stream: state.entities.streams.stream }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
