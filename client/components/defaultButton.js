import React from 'react'

const defaultButton = props => {

  const { label, handleClick, idName } = props

  return (
    <button
      onClick={handleClick}
      id={idName}
    >{label}
    </button>
  )
}

export default defaultButton
