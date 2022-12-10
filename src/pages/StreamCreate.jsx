import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
  renderedInput(formProps) {
    return <input {...formProps.input} />
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderedInput} type="text" />
        <Field name="description" component={this.renderedInput} type="text" />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
