import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />

      </div>
    )
  }

  render() {
    return(
      <div>
        <h1>StreamCreate</h1>
        <form className="ui form">
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="description" component={this.renderInput} label="Enter description" />

        </form>
      </div>

    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)



// Field component always has to be given name prop
// Field is responsible for redux to handle the data but not what gets
// rendered on the screen, which is why component prop needs to be passed down
// component prop will either be a react component or a function for it to call