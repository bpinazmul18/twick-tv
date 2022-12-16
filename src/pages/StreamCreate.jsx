import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStream } from '../store/streams'
import StreamForm from '../components/StreamForm'

const StreamCreate = (props) => {
  const navigate = useNavigate()

  const onSubmit = (formValues) => {
    props.createStream(formValues, navigate)
  }
  return (
    <div>
      <h3>Create a Stream</h3>

      <StreamForm onSubmit={onSubmit} />
    </div>
  )
}
export default connect(null, { createStream })(StreamCreate)
