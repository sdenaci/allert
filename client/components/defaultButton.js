import React from 'react'
import { connect } from 'react-redux'

const defaultButton = (props) => {

  const { label, handleClick } = props

  return (
    <button
      onClick={handleClick}
    >{label}
    </button>
  )
}

export default defaultButton
