import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
  renderedInput({ input, label, id }) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
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

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
