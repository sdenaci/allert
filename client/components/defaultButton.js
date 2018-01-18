import React from 'react'

const defaultButton = props => {

  const { label, handleClick } = props

  return (
    <button
      onClick={handleClick}
    >{label}
    </button>
  )
}

export default defaultButton
