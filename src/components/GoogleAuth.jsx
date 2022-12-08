import React, { Component } from 'react'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
        scope: 'email',
        plugin_name: 'twick-tv',
      })
    })
  }
  render() {
    return <div>Google</div>
  }
}

export default GoogleAuth
