import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
  renderedError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error">
          <div style={{ color: '#9f3a38' }}>{error}</div>
        </div>
      )
    }
  }
  renderedInput = ({ input, label, id, meta }) => {
    return (
      <div className={`field ${meta.touched && meta.error && 'error'}`}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
        {this.renderedError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderedInput}
          type="text"
          label="Enter Title"
          id="title"
        />
        <Field
          name="description"
          component={this.renderedInput}
          type="text"
          label="Enter Description"
          id="description"
        />

        <button className="ui button primary">Submit</button>
      </form>
    )
  }
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

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate)
