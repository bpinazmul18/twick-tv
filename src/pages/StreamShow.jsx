import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'
import { fetchStream } from '../store/streams'
import { useParams } from 'react-router-dom'

const StreamShow = (props) => {
  const videoRef = createRef()
  const { streamId } = useParams()

  useEffect(() => {
    props.fetchStream(streamId)
    buildVidoePlayer()
  }, [streamId])

  const buildVidoePlayer = () => {
    // const player = flb.createPlayer({
    //   type: 'flb',
    //   url: `http://localhost:8000/live/${streamId}.flv`,
    // })

    // if (!player || !props.stream) return null

    // player.attachMediaElement(videoRef.current)
    // player.load()
    // player.play()

    const flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`,
    })

    if (!flvPlayer || !props.stream) return null

    flvPlayer.attachMediaElement(videoRef.current)
    flvPlayer.load()
    flvPlayer.play()
  }

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
