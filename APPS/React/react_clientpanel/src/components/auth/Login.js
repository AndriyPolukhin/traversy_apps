import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase';


class Login extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
}

export default firebaseConnect(Login);
