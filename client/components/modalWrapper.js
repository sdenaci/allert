import React from 'react'
import PropTypes from 'prop-types'

const ModalWrapper = props => {

      // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };


  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal()
  }

  const onOk = () => {
    props.onOk()
    props.hideModal()
  }

  const okButton = props.showOk
    ? (
      <button
        onClick={onOk}
        disabled={props.okDisabled}
      >
        {props.okText}
      </button>
    ) : null;

  return (
    <div className="modal">
      <div className="modal-content">
        <header className="wrapFlexJustify">
          <h1>{props.title}</h1>

          <button onClick={props.hideModal}>x</button>
        </header>

        {props.children}

        {okButton}
      </div>
    </div>

  )
}

ModalWrapper.propTypes = {
  //props
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,


  //methods
  hideModal: PropTypes.func,
  onOk: PropTypes.func
}

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}

}

export default ModalWrapper
