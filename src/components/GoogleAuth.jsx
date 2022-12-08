import React, { Component } from 'react'

class GoogleAuth extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
          scope: 'email',
          plugin_name: 'twick-tv',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        })
    })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in.</div>
    } else if (this.state.isSignedIn) {
      return <div>I am singed in.</div>
    } else {
      return <div>I am not signed in.</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth
