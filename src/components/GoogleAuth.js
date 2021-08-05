import React from 'react'


class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '900345009839-7vjbhrdv7ss7lnm2921nt7lk3mea788v.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return <div>Don't know if signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>signed in</div>
    } else {
      return <div>NOT signed in</div>
    }
  }

  render() {
    return(
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth