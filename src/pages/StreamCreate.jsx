import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../store/streams'

const StreamCreate = (props) => {
  const renderedError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error">
          <div style={{ color: '#9f3a38' }}>{error}</div>
        </div>
      )
    }
  }

  const renderedInput = ({ input, label, id, meta }) => {
    return (
      <div className={`field ${meta.touched && meta.error && 'error'}`}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
        {renderedError(meta)}
      </div>
    )
  }

  const onSubmit = (formValues) => {
    props.createStream(formValues)
  }

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field
        name="title"
        component={renderedInput}
        type="text"
        label="Enter Title"
        id="title"
      />
      <Field
        name="description"
        component={renderedInput}
        type="text"
        label="Enter Description"
        id="description"
      />

      <button className="ui button primary">Submit</button>
    </form>
  )
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

const FormWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate)

export default connect(null, { createStream })(FormWrapped)
