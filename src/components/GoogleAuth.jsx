import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../store/auth'

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
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <div>
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon"></i>
            Sign Out
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <button
            onClick={this.onSignInClick}
            className="ui green google button"
          >
            <i className="google icon"></i>
            Sign In With Google
          </button>
        </div>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth)
