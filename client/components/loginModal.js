import React from 'react'
import { ModalWrapper, Login } from './index'

const loginModal = props => {

  const loginModal = props => {
    props.hideModal();
    props.signIn(provider)
  }

  return (

    <ModalWrapper
      {...props}
      title="Login"
      width={400}
      showOk={false}
    >
      <Login />
    </ModalWrapper>

  )

}

export default loginModal
