import React from 'react'
import { connect } from 'react-redux'

import  { hideModal } from '../store'
import { SignupModal, LoginModal } from './index'

const modalConductor = props => {

    switch(props.modal) {

      case 'SIGN_IN':
        return <SignupModal {...props} />

      case 'LOGIN':
        return <LoginModal {...props} />

      default:
        return null
    }
}

const mapDispatch = dispatch => ({
  hideModal: () => {
    dispatch(hideModal())
  }
})

export default connect(state => state, mapDispatch)(modalConductor)
