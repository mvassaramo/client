import React from 'react'


class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '900345009839-7vjbhrdv7ss7lnm2921nt7lk3mea788v.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return(
      <div>google auth</div>
    )
  }
}

export default GoogleAuth