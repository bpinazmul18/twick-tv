import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import flb from 'flv.js'
import { fetchStream } from '../store/streams'
import { useParams } from 'react-router-dom'

const StreamShow = (props) => {
  const videoRef = createRef()
  const { streamId } = useParams()

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  useEffect(() => {
    const player = flb.createPlayer({
      type: 'flb',
      url: `http://localhost:8000/live/${streamId}.flv`,
    })

    player.attachMediaElement(videoRef.current)
    player.load()
    player.play()
  }, [])

  if (!props.stream) return <div>Loading...</div>
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{props.stream.title}</h1>
      <h3>{props.stream.description}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { stream: state.entities.streams.stream }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
