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

  render() {
    return (
      <form className="ui form">
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
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
