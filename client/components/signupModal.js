import React from 'react'
import { ModalWrapper, Signup } from './index'

const signUpModal = props => {

  const signUp = props => {
    props.hideModal();
    props.signIn(provider)
  }

  return (

    <ModalWrapper
      {...props}
      title="Sign Up"
      width={400}
      showOk={false}
    >
      <Signup />
    </ModalWrapper>

  )

}

export default signUpModal
