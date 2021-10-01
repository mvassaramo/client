import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'
class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    return(
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>

    )
  }
}

export default connect(null, { createStream })(StreamCreate)

// Field component always has to be given name prop
// Field is responsible for redux to handle the data but not what gets
// rendered on the screen, which is why component prop needs to be passed down
// component prop will either be a react component or a function for it to call