import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import { Field, formValues, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    return(
      <div>
        <h1>StreamCreate</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="description" component={this.renderInput} label="Enter description" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>

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

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)

// Field component always has to be given name prop
// Field is responsible for redux to handle the data but not what gets
// rendered on the screen, which is why component prop needs to be passed down
// component prop will either be a react component or a function for it to call