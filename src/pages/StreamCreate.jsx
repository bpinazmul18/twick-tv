import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
  renderedInput({ input, label, id, meta }) {
    return (
      <div className={`field ${meta.touched && meta.error && 'error'}`}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
        {meta.touched && meta.error && (
          <div
            className="ui error red"
            style={{ display: 'block', color: 'tomato' }}
          >
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
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
        className="ui form"
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
