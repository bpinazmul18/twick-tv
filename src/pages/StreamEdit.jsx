import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import StreamForm from '../components/StreamForm'
import { editStream, fetchStream } from '../store/streams'

const StreamEdit = (props) => {
  const navigate = useNavigate()
  const { streamId } = useParams()

  useEffect(() => {
    props.fetchStream(streamId)
  }, [])

  useEffect(() => {
    props.editStream(streamId)
  }, [])

  const onSubmit = (formValues) => {
    console.log(formValues)
    // props.createStream(formValues, navigate)
  }

  if (!props.stream) return <div>Loading...</div>
  return (
    <div>
      <h3>Edit a Stream</h3>

      <StreamForm
        initialValues={{
          title: props.stream.title,
          description: props.stream.description,
        }}
        onSubmit={onSubmit}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { stream: state.entities.streams.stream }
}

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)
